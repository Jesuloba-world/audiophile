import { FC, ReactNode } from "react";
import { Container } from "./modalWrapper.style";

export const ModalWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return <Container>{children}</Container>;
};
