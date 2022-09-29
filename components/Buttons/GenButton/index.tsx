import { FC } from "react";
import { Container } from "./genButton.style";

interface props {
	children: string;
	action: () => void;
	fullwidth?: boolean;
}

export const GenButton: FC<props> = ({ children, action, fullwidth }) => {
	return (
		<Container onClick={action} full={fullwidth}>
			{children}
		</Container>
	);
};
