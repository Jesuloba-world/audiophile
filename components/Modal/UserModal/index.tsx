import { useContext } from "react";
import { Container, Text, LoaderContainer } from "./styles";
import { GenButton } from "components";
import { useLogin } from "hooks";
import { ModalContext } from "../../Buttons/IconButton";
import { useMe } from "hooks";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";

export const UserModal = () => {
	const { setLogin } = useLogin();
	const { removeModal } = useContext(ModalContext);
	const { me, loading, loggedIn } = useMe();
	const theme: any = useTheme();

	return (
		<Container>
			{loading ? (
				<LoaderContainer>
					<Puff stroke={theme.sienna} />
				</LoaderContainer>
			) : loggedIn ? (
				<Text>Hello, {me?.username}</Text>
			) : (
				<Text>You&apos;re not logged in yet</Text>
			)}
			{/* TODO: write the logout function */}
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
