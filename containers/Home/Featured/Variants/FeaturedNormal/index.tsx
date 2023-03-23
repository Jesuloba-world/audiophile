import Image from "next/image";
import { FC } from "react";
import { Container, Mask, TextContainer } from "./normal.style";
import { SeeProductButton } from "components";
import { ProductImageType } from "src/graphql/generated";

interface props {
	image: ProductImageType;
	slug: string;
	name: string;
}

export const FeaturedNormal: FC<props> = ({ image, name, slug }) => {
	return (
		<Container>
			<Image
				className="desktop"
				src={image.desktop}
				alt={`${name.toLowerCase()} image`}
				fill
			/>
			<Image
				className="tablet"
				src={image.tablet}
				alt={`${name.toLowerCase()} image`}
				fill
			/>
			<Image
				className="mobile"
				src={image.mobile}
				alt={`${name.toLowerCase()} image`}
				fill
			/>
			<Mask>
				<TextContainer>
					<h4>{name}</h4>
					<SeeProductButton slug={slug} color={"transparent"} />
				</TextContainer>
			</Mask>
		</Container>
	);
};
