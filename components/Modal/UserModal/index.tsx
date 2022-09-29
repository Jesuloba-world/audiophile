import { Container, Text } from "./styles";
import { GenButton } from "components";

export const UserModal = () => {
	return (
		<Container>
			<Text>You&apos;re not logged in yet</Text>
			<GenButton fullwidth action={() => {}}>
				Login
			</GenButton>
		</Container>
	);
};
