import { FC } from "react";
import { Container, Mask, TextContainer, Title, SubTitle } from "./large.style";
import Image from "next/image";
import { SeeProductButton } from "components";

interface props {
	image: any;
	name: string;
	content: string;
	slug: string;
}

export const FeaturedLarge: FC<props> = ({ image, name, content, slug }) => {
	return (
		<Container>
			<Image src={image} alt={`${name.toLowerCase()} image`} />
			<Mask>
				<TextContainer>
					<Title>{name}</Title>
					<SubTitle>{content}</SubTitle>
					<SeeProductButton to={`/product/${slug}`} color="black" />
				</TextContainer>
			</Mask>
		</Container>
	);
};
