import { FC } from "react";
import { Container } from "./genButton.style";

interface props {
	children: string;
}

export const GenButton: FC<props> = ({ children }) => {
	return <Container>{children}</Container>;
};
