import { FC } from "react";
import { Container } from "./genButton.style";

interface props {
	children: string;
	action: () => void;
}

export const GenButton: FC<props> = ({ children, action }) => {
	return <Container onClick={action}>{children}</Container>;
};
