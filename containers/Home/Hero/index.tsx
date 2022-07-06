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
import HeroMarkIIHeadphones from "assets/home/desktop/image-hero.jpg";

// should be changed later
const slug = "xx99_mark_ii_headphones";

export const Hero: FC = () => {
	return (
		<Container image={HeroMarkIIHeadphones.src}>
			<Inner>
				<TextContainer>
					<Overline>NEW PRODUCT</Overline>
					<Title>XX99 Mark II Headphones</Title>
					<SubTitle>
						Experience natural, lifelike audio and exceptional build
						quality made for the passionate music enthusiast.
					</SubTitle>
					<SeeProductButton to={`/product/${slug}`} color="sienna" />
				</TextContainer>
			</Inner>
		</Container>
	);
};
