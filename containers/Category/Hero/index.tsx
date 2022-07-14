import { FC } from "react";
import { Container, Title } from "./hero.style";

interface props {
	title: string;
}

export const CategoryHero: FC<props> = ({ title }) => {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	);
};
