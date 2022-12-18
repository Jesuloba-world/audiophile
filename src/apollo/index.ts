import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

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

// make your link
const link = from([
	errorLink,
	new HttpLink({
		uri: "https://audiophile-server-development.up.railway.app/graphql/",
		credentials: "include",
	}),
]);

export const Client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});
