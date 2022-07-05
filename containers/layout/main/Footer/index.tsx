import { FC } from "react";
import {
	Container,
	Inner,
	Top,
	Middle,
	Note,
	Socials,
	Copyright,
	Yellow,
} from "./footer.style";
import { Logo, IconLink } from "components";
import { MidLinks } from "../MidLinks";
import { footerNote, socialIcons, copyrightText } from "../data";

interface footerProps {}

export const Footer: FC<footerProps> = () => {
	return (
		<Container>
			<Inner>
				<Yellow />
				<Top>
					<Logo />
					<MidLinks />
				</Top>
				<Middle>
					<Note>{footerNote}</Note>
					<Socials>
						{socialIcons.map((el, index) => (
							<IconLink
								key={index}
								Icon={el.Icon}
								link={el.link}
							/>
						))}
					</Socials>
				</Middle>
				<Copyright>{copyrightText}</Copyright>
			</Inner>
		</Container>
	);
};
