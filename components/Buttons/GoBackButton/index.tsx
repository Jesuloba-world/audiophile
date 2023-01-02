import { Container } from "./goback.style";
import { useRouter } from "next/router";

export const GoBack = () => {
	const router = useRouter();

	return <Container onClick={() => router.back()}>Go back</Container>;
};
