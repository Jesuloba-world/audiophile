import {
	ApolloClient,
	InMemoryCache,
	from,
	createHttpLink,
	ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { getSession, signOut } from "next-auth/react";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ message }) => {
			console.log(message);
		});
	}
	if (networkError) {
		console.log(networkError.message);
	}
});

const authMiddleware = setContext(async (_, { headers }) => {
	let token: string = "";
	try {
		const session = await getSession();
		token = session?.token as string;
	} catch (error) {
		signOut();
	}

	return {
		headers: {
			...headers,
			authorization: token ? `JWT ${token}` : "",
		},
	};
});

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_API_URL,
});

// make your link
const link = from([authMiddleware, errorLink, httpLink]);

export const Client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});
