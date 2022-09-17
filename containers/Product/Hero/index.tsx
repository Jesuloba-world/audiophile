import React, { FC } from "react";
import {
	Container,
	TextContainer,
	Overline,
	Description,
	Name,
	Price,
	ButtonContainer,
} from "./hero.style";
import Image from "next/image";
import { Maybe, ProductImageType } from "src/graphql/generated";
import numeral from "numeral";
import { GenButton, NumberController } from "components";

interface props {
	image?: Maybe<ProductImageType>;
	name?: Maybe<string>;
	description?: Maybe<string>;
	isNew: boolean;
	price: number;
}

export const ProductHero: FC<props> = ({
	image,
	isNew,
	price,
	description,
	name,
}) => {
	return (
		<Container>
			<Image
				src={image?.desktop as string}
				alt={image?.altText as string}
				height={560}
				width={540}
			/>
			<TextContainer>
				{isNew ? <Overline>NEW PRODUCT</Overline> : null}
				<Name>{name}</Name>
				<Description>{description}</Description>
				<Price>{numeral(price).format("$0,0")}</Price>
				<ButtonContainer>
					<NumberController />
					<GenButton>Add to cart</GenButton>
				</ButtonContainer>
			</TextContainer>
		</Container>
	);
};
