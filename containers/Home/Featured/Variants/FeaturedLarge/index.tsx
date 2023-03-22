import { FC } from "react";
import { Container, Mask, TextContainer, Title, SubTitle } from "./large.style";
import Image from "next/image";
import { SeeProductButton } from "components";

interface props {
	image: string;
	tablet: string;
	name: string;
	content: string;
	slug: string;
}

export const FeaturedLarge: FC<props> = ({
	image,
	name,
	content,
	slug,
	tablet,
}) => {
	return (
		<Container>
			<Image
				src={tablet}
				alt={`${name.toLowerCase()} image`}
				width={640}
				height={793}
				className={"tablet"}
			/>
			<Image
				src={image}
				alt={`${name.toLowerCase()} image`}
				width={795}
				height={560}
				className={"desktop"}
			/>
			<Mask>
				<TextContainer>
					<Title>{name}</Title>
					<SubTitle>{content}</SubTitle>
					<SeeProductButton slug={slug} color="black" />
				</TextContainer>
			</Mask>
		</Container>
	);
};
