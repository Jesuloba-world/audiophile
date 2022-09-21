import { FC, ReactNode, useEffect, useState } from "react";
import { Container, ModalContainer, OverLord, BackDrop } from "./button.style";

interface iconButtonProps {
	name: string;
	Icon: any;
	modal: ReactNode;
	containerHeight?: number;
	whichIsActive: "cart" | "user" | undefined;
	setActive: (name: "cart" | "user" | undefined) => void;
}

export const IconButton: FC<iconButtonProps> = ({
	Icon,
	modal,
	name,
	containerHeight,
	whichIsActive,
	setActive,
}) => {
	// TODO: create the hidden parts and differentiate cart from user
	const isActive = whichIsActive === name;

	return (
		<OverLord>
			<Container
				onClick={() =>
					setActive(isActive ? undefined : (name as "cart" | "user"))
				}
			>
				<Icon />
			</Container>
			{isActive ? (
				<>
					<BackDrop
						containerHeight={containerHeight ? containerHeight : 0}
						onClick={() => setActive(undefined)}
					/>
					<ModalContainer>{modal}</ModalContainer>
				</>
			) : null}
		</OverLord>
	);
};
