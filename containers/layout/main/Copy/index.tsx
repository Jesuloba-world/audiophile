import { FC } from "react";
import {
	Container,
	TextContainer,
	Title,
	SubTitle,
	ImageContainer,
} from "./copy.style";
import BestGear from "assets/shared/desktop/image-best-gear.jpg";
import Image from "next/image";

interface copyProps {
	space?: boolean;
}

export const Copy: FC<copyProps> = ({ space }) => {
	return (
		<Container space={space}>
			<TextContainer>
				<Title>
					Bringing you the <span>best</span> audio gear
				</Title>
				<SubTitle>
					Located at the heart of New York City, Audiophile is the
					premier store for high end headphones, earphones, speakers,
					and audio accessories. We have a large showroom and luxury
					demonstration rooms available for you to browse and
					experience a wide range of our products. Stop by our store
					to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</SubTitle>
			</TextContainer>
			<ImageContainer>
				<Image src={BestGear} alt={"We have the Best Gear"} />
			</ImageContainer>
		</Container>
	);
};
