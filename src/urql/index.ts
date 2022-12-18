import { createClient } from "@urql/core";

const urqlClient = createClient({
	url: "https://audiophile-server-development.up.railway.app/graphql/",
});

export default urqlClient;
