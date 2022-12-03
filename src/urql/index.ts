import { createClient } from "@urql/core";

const urqlClient = createClient({
	url: "http://127.0.0.1:8000/graphql/",
});

export default urqlClient;
