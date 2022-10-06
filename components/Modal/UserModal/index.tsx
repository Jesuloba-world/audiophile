import { useContext } from "react";
import { Container, Text } from "./styles";
import { GenButton } from "components";
import { useLogin } from "hooks";
import { ModalContext } from "../../Buttons/IconButton";

export const UserModal = () => {
	const { setLogin } = useLogin();
	const { removeModal } = useContext(ModalContext);

	return (
		<Container>
			<Text>You&apos;re not logged in yet</Text>
			<GenButton
				fullwidth
				action={() => {
					setLogin(true);
					removeModal();
				}}
			>
				Login
			</GenButton>
		</Container>
	);
};
