import Image from "next/image";
import { FC } from "react";
import { Container, Mask, TextContainer } from "./normal.style";
import { SeeProductButton } from "components";

interface props {
	image: any;
	slug: string;
	name: string;
}

export const FeaturedNormal: FC<props> = ({ image, name, slug }) => {
	return (
		<Container>
			<Image src={image} alt={`${name.toLowerCase()} image`} fill />
			<Mask>
				<TextContainer>
					<h4>{name}</h4>
					<SeeProductButton slug={slug} />
				</TextContainer>
			</Mask>
		</Container>
	);
};
