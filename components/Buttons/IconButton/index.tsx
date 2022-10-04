import { FC, ReactNode, useEffect, useState } from "react";
import { Container, ModalContainer, OverLord } from "./button.style";
import { useBackdrop, useLogin } from "hooks";

interface iconButtonProps {
	name: string;
	Icon: any;
	Modal: () => JSX.Element;
	whichIsActive: "cart" | "user" | undefined;
	setActive: (name: "cart" | "user" | undefined) => void;
}

export const IconButton: FC<iconButtonProps> = ({
	Icon,
	Modal,
	name,
	whichIsActive,
	setActive,
}) => {
	const isActive = whichIsActive === name;
	const { setBackdrop, showBackdrop } = useBackdrop();

	useEffect(() => {
		if (!showBackdrop) {
			setActive(undefined);
		}
	}, [showBackdrop, setActive]);

	return (
		<OverLord>
			<Container
				onClick={() => {
					setActive(isActive ? undefined : (name as "cart" | "user"));
					setBackdrop(!isActive);
				}}
			>
				<Icon />
			</Container>
			{isActive ? (
				<ModalContainer>
					<Modal />
				</ModalContainer>
			) : null}
		</OverLord>
	);
};
