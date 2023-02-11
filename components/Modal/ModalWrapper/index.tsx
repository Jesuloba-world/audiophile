import { FC, ReactNode } from "react";
import { Container } from "./style";

export const ModalWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return <Container>{children}</Container>;
};
