import { FC } from "react";
import { Container, Inner, Top, Middle, Note } from "./footer.style";
import { Logo } from "components";
import { MidLinks } from "../MidLinks";
import { footerNote } from "../data";

interface footerProps {}

export const Footer: FC<footerProps> = () => {
	return (
		<Container>
			<Inner>
				<Top>
					<Logo />
					<MidLinks />
				</Top>
				<Middle>
					<Note>{footerNote}</Note>
				</Middle>
			</Inner>
		</Container>
	);
};
