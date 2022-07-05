import { FC } from "react";
import { Container, Inner, IconLinks } from "./header.style";
import { Logo, IconButton } from "components";
import { iconButtons } from "../data";
import { MidLinks } from "../MidLinks";

export const Header: FC = () => {
	return (
		<Container>
			<Inner>
				<Logo />
				<MidLinks />
				<IconLinks>
					{iconButtons.map((el, index) => (
						<IconButton key={index} name={el.name} Icon={el.icon} />
					))}
				</IconLinks>
			</Inner>
		</Container>
	);
};
