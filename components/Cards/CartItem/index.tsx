import { FC } from "react";
import {
	Container,
	TextAndImage,
	Name,
	Price,
	Text,
	ControllerContainer,
} from "./styles";
import Image from "next/image";
import numeral from "numeral";
import { NumberController } from "components";

interface cartItemsProps {
	image?: string;
	altText?: string | null;
	name: string | null | undefined;
	price: any;
	quantity?: number;
}

export const CartItem: FC<cartItemsProps> = ({
	image,
	altText,
	name,
	price,
	quantity,
}) => {
	const increment = () => {};

	const decrement = () => {};

	return (
		<Container>
			<TextAndImage>
				<Image
					src={image as string}
					alt={altText as string}
					height={64}
					width={64}
				/>
				<Text>
					<Name>{name}</Name>
					<Price>{numeral(price).format("$0,0")}</Price>
				</Text>
			</TextAndImage>
			<ControllerContainer>
				<NumberController
					increment={increment}
					number={quantity as number}
					decrement={decrement}
					small
				/>
			</ControllerContainer>
		</Container>
	);
};
