import { FC } from "react";
import {
	Container,
	ImageContainer,
	TextContainer,
	Name,
	Description,
	GridFrame,
	Overline,
} from "./productcard.style";
import { Maybe, ProductImageType } from "src/graphql/generated";
import Image from "next/image";
import { SeeProductButton } from "components";

interface props {
	image?: Maybe<ProductImageType>;
	name?: Maybe<string>;
	description?: Maybe<string>;
	isNew?: boolean;
	slug?: Maybe<string>;
	reverse: boolean;
}

export const ProductCard: FC<props> = ({
	description,
	image,
	name,
	slug,
	isNew,
	reverse,
}) => {
	return (
		<Container reverse={reverse}>
			<ImageContainer reverse={reverse}>
				<Image
					src={image?.desktop as string}
					alt={image?.altText as string}
					height={560}
					width={540}
					priority
				/>
			</ImageContainer>
			<GridFrame reverse={reverse}>
				<TextContainer>
					{isNew ? <Overline>NEW PRODUCT</Overline> : null}
					<Name>{name}</Name>
					<Description>{description}</Description>
					<SeeProductButton slug={slug as string} color={"sienna"} />
				</TextContainer>
			</GridFrame>
		</Container>
	);
};
