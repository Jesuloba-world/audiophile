import { useContext } from "react";
import { Container, Text, LoaderContainer, Name } from "./styles";
import { GenButton } from "components";
import { useLogin } from "hooks";
import { ModalContext } from "../../Buttons/IconButton";
import { useBackdrop } from "hooks";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Client } from "src/apollo";

export const UserModal = () => {
	const navigate = useRouter().push;

	const { setLogin } = useLogin();
	const { removeModal } = useContext(ModalContext);
	const theme: any = useTheme();
	const { setBackdrop } = useBackdrop();
	const { data, status } = useSession();

	const startLogin = () => {
		setLogin(true);
		removeModal();
	};

	const logOut = () => {
		signOut({ redirect: false });
		Client.cache.reset();
		removeModal();
		setBackdrop(false);
		navigate("/");
	};

	const goToOrders = () => {
		removeModal();
		setBackdrop(false);
		navigate("/orders");
	};

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
					action={startLogin}
					disabled={status === "loading"}
				>
					Login
				</GenButton>
			) : (
				<>
					<GenButton
						fullwidth
						color="transparent"
						action={goToOrders}
					>
						Orders
					</GenButton>
					<GenButton fullwidth action={logOut}>
						Logout
					</GenButton>
				</>
			)}
		</Container>
	);
};
