import { FC } from "react";
import { Container, ImageBox, TextBox, TextContainer } from "./broken.style";
import Image from "next/image";
import { SeeProductButton } from "components";

interface props {
	image: any;
	name: string;
	slug: string;
}

export const FeaturedBroken: FC<props> = ({ image, name, slug }) => {
	return (
		<Container>
			<ImageBox>
				<Image src={image} alt={`${name.toLowerCase()} image`} />
			</ImageBox>
			<TextBox>
				<TextContainer>
					<h4>{name}</h4>
					<SeeProductButton to={`/product/${slug}`} />
				</TextContainer>
			</TextBox>
		</Container>
	);
};
