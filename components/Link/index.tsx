import { FC } from "react";
import { default as NextLink } from "next/link";
import { hrefType } from "types";
import { Container } from "./link.style";

interface linkProps {
	name: string;
	href: hrefType;
}

export const Link: FC<linkProps> = ({ name, href }) => {
	return (
		<NextLink href={href}>
			<Container>{name}</Container>
		</NextLink>
	);
};
