import { FC, ReactNode } from "react";
import { Container } from "./pageWrapper.style";
import { GoBack } from "components";

interface props {
	children?: ReactNode;
}

export const ProductPageWrapper: FC<props> = ({ children }) => {
	return (
		<Container>
			<GoBack />
			{children}
		</Container>
	);
};
