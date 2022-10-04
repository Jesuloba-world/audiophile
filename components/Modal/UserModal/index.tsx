import { Container, Text } from "./styles";
import { GenButton } from "components";
import { useLogin } from "hooks";

export const UserModal = () => {
	const { showLogin, setLogin } = useLogin();

	return (
		<Container>
			<Text>You&apos;re not logged in yet</Text>
			<GenButton fullwidth action={() => setLogin(true)}>
				Login
			</GenButton>
		</Container>
	);
};
