import { FC } from "react";
import {
	Container,
	Inner,
	Overline,
	SubTitle,
	TextContainer,
	Title,
} from "./hero.style";
import { SeeProductButton } from "components";
import { ProductImageType, ProductType } from "src/graphql/generated";

interface heroProps {
	image: ProductImageType;
	product: ProductType;
	copy: string;
}

export const Hero: FC<heroProps> = ({ image, product, copy }) => {
	return (
		<Container
			image={image.desktop}
			tabletImage={image.tablet}
			mobileImage={image.mobile}
		>
			<Inner>
				<TextContainer>
					{product.new && <Overline>NEW PRODUCT</Overline>}
					<Title>{product.name}</Title>
					<SubTitle>{copy}</SubTitle>
					<SeeProductButton
						slug={product.slug as string}
						color="sienna"
					/>
				</TextContainer>
			</Inner>
		</Container>
	);
};
