import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { ObtainJsonWebToken } from "src/graphql/generated";

declare module "next-auth" {
	interface User extends ObtainJsonWebToken {
		isNewUser: boolean;
		tokenExpiresIn: number;
		username: string;
	}

	interface Session extends DefaultSession {
		token: string;
		username: string;
		isNewUser: boolean;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken: string;
		refreshToken: string;
		username: string;
		isNewUser: boolean;
		tokenExpiresIn: number;
	}
}
