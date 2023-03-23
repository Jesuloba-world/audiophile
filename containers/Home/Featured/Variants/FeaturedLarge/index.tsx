import { FC } from "react";
import { Container, Mask, TextContainer, Title, SubTitle } from "./large.style";
import Image from "next/image";
import { SeeProductButton } from "components";
import { ProductImageType } from "src/graphql/generated";

interface props {
	image: ProductImageType;
	name: string;
	content: string;
	slug: string;
}

export const FeaturedLarge: FC<props> = ({ image, name, content, slug }) => {
	return (
		<Container>
			<Image
				src={image.tablet}
				alt={`${name.toLowerCase()} image`}
				width={640}
				height={793}
				className={"tablet"}
			/>
			<Image
				src={image.desktop}
				alt={`${name.toLowerCase()} image`}
				width={795}
				height={560}
				className={"desktop"}
			/>
			<Image
				src={image.mobile}
				alt={`${name.toLowerCase()} image`}
				width={558}
				height={558}
				className={"mobile"}
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
