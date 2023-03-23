import { FC } from "react";
import { Container, ImageBox, TextBox, TextContainer } from "./broken.style";
import Image from "next/image";
import { SeeProductButton } from "components";
import { ProductImageType } from "src/graphql/generated";

interface props {
	image: ProductImageType;
	name: string;
	slug: string;
}

export const FeaturedBroken: FC<props> = ({ image, name, slug }) => {
	return (
		<Container>
			<ImageBox>
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
			</ImageBox>
			<TextBox>
				<TextContainer>
					<h4>{name}</h4>
					<SeeProductButton slug={slug} color={"transparent"} />
				</TextContainer>
			</TextBox>
		</Container>
	);
};
