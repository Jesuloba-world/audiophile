import { FC } from "react";
import { Container, Inner, MiddleLinks, IconLinks } from "./header.style";
import { Logo, Link, IconButton } from "components";
import { midlinks, iconButtons } from "./header.data";

export const Header: FC = () => {
	return (
		<Container>
			<Inner>
				<Logo />
				<MiddleLinks>
					{midlinks.map((el, index) => (
						<Link key={index} name={el.name} href={el.href} />
					))}
				</MiddleLinks>
				<IconLinks>
					{iconButtons.map((el, index) => (
						<IconButton key={index} name={el.name} Icon={el.icon} />
					))}
				</IconLinks>
			</Inner>
		</Container>
	);
};
