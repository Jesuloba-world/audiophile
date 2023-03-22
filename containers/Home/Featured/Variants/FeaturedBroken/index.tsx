import { FC } from "react";
import { Container, ImageBox, TextBox, TextContainer } from "./broken.style";
import Image from "next/image";
import { SeeProductButton } from "components";

interface props {
	image: any;
	name: string;
	slug: string;
	tablet: string;
}

export const FeaturedBroken: FC<props> = ({ image, name, slug, tablet }) => {
	return (
		<Container>
			<ImageBox>
				<Image
					className="desktop"
					src={image}
					alt={`${name.toLowerCase()} image`}
					fill
				/>
				<Image
					className="tablet"
					src={tablet}
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
