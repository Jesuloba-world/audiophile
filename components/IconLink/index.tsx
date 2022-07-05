import { FC } from "react";
import { Container } from "./iconlink.style";
import Link from "next/link";

interface iconlinkProps {
	Icon: any;
	link: string;
}

export const IconLink: FC<iconlinkProps> = ({ Icon, link }) => {
	return (
		<Container href={link}>
			<Icon />
		</Container>
	);
};
