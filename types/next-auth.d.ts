import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
	interface User {
		success: boolean;
		errors: any;
		refreshToken: string;
		token: string;
	}

	interface Session extends DefaultSession {
		token: string;
	}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		accessToken: string;
		refreshToken: string;
	}
}
