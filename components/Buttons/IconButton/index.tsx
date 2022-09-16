import { FC } from "react";
import { Container } from "./button.style";

interface iconButtonProps {
	name: string;
	Icon: any;
}

export const IconButton: FC<iconButtonProps> = ({ Icon }) => {
	// TODO: create the hidden parts and differentiate cart from user
	return (
		<Container>
			<Icon />
		</Container>
	);
};
