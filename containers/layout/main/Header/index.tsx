import { FC } from "react";
import { Container, Inner } from "./header.style";
import { Logo } from "components";

export const Header: FC = () => {
	return (
		<Container>
			<Inner>
				<Logo />
			</Inner>
		</Container>
	);
};
