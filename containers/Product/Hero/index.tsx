import React, { FC, useState } from "react";
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
import {
	Maybe,
	ProductImageType,
	AddToCartDocument,
} from "src/graphql/generated";
import numeral from "numeral";
import { GenButton, NumberController } from "components";
import { useMutation } from "@apollo/client";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";

interface props {
	productId: string;
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
	productId,
}) => {
	const [numForCart, setNumForCart] = useState(1);
	const [AddToCart, { loading }] = useMutation(AddToCartDocument, {});
	const theme: any = useTheme();

	const addToCart = () => {
		AddToCart({
			variables: {
				productId: productId,
				quantity: numForCart,
			},
		});
	};

	const increment = () => {
		setNumForCart((prev) => prev + 1);
	};

	const decrement = () => {
		setNumForCart((prev) => (prev > 1 ? prev - 1 : 1));
	};

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
					<NumberController
						number={numForCart}
						increment={increment}
						decrement={decrement}
					/>
					<GenButton disabled={loading} action={addToCart}>
						{loading ? (
							<Puff stroke={theme.white} />
						) : (
							"Add to cart"
						)}
					</GenButton>
				</ButtonContainer>
			</TextContainer>
		</Container>
	);
};
