import { FC } from "react";
import { Container, Inner, MiddleLinks, IconLinks } from "./header.style";
import { Logo, Link } from "components";
import { midlinks } from "./header.data";

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
				<IconLinks></IconLinks>
			</Inner>
		</Container>
	);
};
