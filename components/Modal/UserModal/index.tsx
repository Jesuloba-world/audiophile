import { useContext } from "react";
import { Container, Text, LoaderContainer, Name } from "./styles";
import { GenButton } from "components";
import { useLogin } from "hooks";
import { ModalContext } from "../../Buttons/IconButton";
import { useBackdrop } from "hooks";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";
import { useSession, signOut } from "next-auth/react";

export const UserModal = () => {
	const { setLogin } = useLogin();
	const { removeModal } = useContext(ModalContext);
	const theme: any = useTheme();
	const { setBackdrop } = useBackdrop();
	const { data, status } = useSession();

	return (
		<Container>
			{status === "loading" ? (
				<LoaderContainer>
					<Puff stroke={theme.sienna} />
				</LoaderContainer>
			) : status === "authenticated" ? (
				<Text>
					Hello, <Name>{data.username}</Name>
				</Text>
			) : (
				<Text>You&apos;re not logged in yet</Text>
			)}
			{!(status === "authenticated") ? (
				<GenButton
					fullwidth
					action={() => {
						setLogin(true);
						removeModal();
					}}
					disabled={status === "loading"}
				>
					Login
				</GenButton>
			) : (
				<GenButton
					fullwidth
					action={() => {
						signOut({ redirect: false });
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
