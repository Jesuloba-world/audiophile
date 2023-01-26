import NextAuth, { AuthOptions, Awaitable, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Client } from "src/apollo";
import { checkIsEmail } from "utils";
import { LoginDocument, MutationLoginArgs } from "src/graphql/generated";

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			id: "login",
			name: "EmailOrUsername",

			credentials: {
				id: {
					label: "Email address or username",
					type: "text",
					name: "id",
				},
				password: {
					label: "Password",
					type: "password",
					name: "password",
				},
			},
			authorize: async (credentials, req) => {
				const id: string = credentials?.id || "";
				const isEmail = checkIsEmail(id);

				let param: MutationLoginArgs;

				if (isEmail) {
					param = {
						email: id,
						password: credentials?.password || "",
					};
				} else {
					param = {
						username: id,
						password: credentials?.password || "",
					};
				}

				const res = await Client.query({
					query: LoginDocument,
					variables: param,
				});

				const user = res.data.login;

				// If no error and we have user data, return it
				if (res.data.login?.success && user) {
					return user as Awaitable<User>;
				}
				// Return null if user data could not be retrieved
				return null;
			},
		}),
	],
	callbacks: {
		jwt: ({ token, user }) => {
			if (user) {
				token.accessToken = user.token;
				token.refreshToken = user.refreshToken;
			}
			return token;
		},
		session: async ({ session, token }) => {
			session.token = token.accessToken;
			return session;
		},
	},
};

export default NextAuth(authOptions);
