import { useContext } from "react";
import { Container, Text, LoaderContainer, Name } from "./styles";
import { GenButton } from "components";
import { useLogin } from "hooks";
import { ModalContext } from "../../Buttons/IconButton";
import { useMe, useBackdrop } from "hooks";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";

export const UserModal = () => {
	const { setLogin } = useLogin();
	const { removeModal } = useContext(ModalContext);
	const { me, loading, loggedIn, logout } = useMe();
	const theme: any = useTheme();
	const { setBackdrop } = useBackdrop();

	return (
		<Container>
			{loading ? (
				<LoaderContainer>
					<Puff stroke={theme.sienna} />
				</LoaderContainer>
			) : loggedIn ? (
				<Text>
					Hello, <Name>{me?.username}</Name>
				</Text>
			) : (
				<Text>You&apos;re not logged in yet</Text>
			)}
			{/* TODO: write the logout function */}
			{!loggedIn ? (
				<GenButton
					fullwidth
					action={() => {
						setLogin(true);
						removeModal();
					}}
				>
					Login
				</GenButton>
			) : (
				<GenButton
					fullwidth
					action={() => {
						logout();
						removeModal();
						setBackdrop(false);
					}}
				>
					Logout
				</GenButton>
			)}
		</Container>
	);
};
