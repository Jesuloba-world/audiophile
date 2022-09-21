import { FC, ReactNode, useEffect, useState } from "react";
import { Container, ModalContainer, OverLord } from "./button.style";

interface iconButtonProps {
	name: string;
	Icon: any;
	modal: ReactNode;
}

export const IconButton: FC<iconButtonProps> = ({ Icon, modal, name }) => {
	// TODO: create the hidden parts and differentiate cart from user
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log(name, showModal);
	}, [name, showModal]);

	return (
		<OverLord>
			<Container onClick={() => setShowModal((prev) => !prev)}>
				<Icon />
			</Container>
			{showModal ? <ModalContainer>{modal}</ModalContainer> : null}
		</OverLord>
	);
};
