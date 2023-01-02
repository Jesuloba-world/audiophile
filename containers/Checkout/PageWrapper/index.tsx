import { FC, ReactNode } from "react";
import { Container, Inner } from "./styles";
import { GoBack } from "components";

export const CheckoutPageWrapper: FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<Container>
			<Inner>
				<GoBack />
				{children}
			</Inner>
		</Container>
	);
};
