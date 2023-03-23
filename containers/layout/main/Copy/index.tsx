import { FC } from "react";
import {
	Container,
	TextContainer,
	Title,
	SubTitle,
	ImageContainer,
} from "./copy.style";
import BestGear from "assets/shared/desktop/image-best-gear.jpg";
import BestGearTablet from "assets/shared/tablet/image-best-gear.jpg";
import BestGearMobile from "assets/shared/mobile/image-best-gear.jpg";
import Image from "next/image";

interface copyProps {
	home?: boolean;
}

export const Copy: FC<copyProps> = ({ home }) => {
	return (
		<Container home={home}>
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
				<Image
					className="desktop"
					src={BestGear}
					alt={"We have the Best Gear"}
					priority
				/>
				<Image
					className="tablet"
					src={BestGearTablet}
					alt={"We have the Best Gear"}
					priority
				/>
				<Image
					className="mobile"
					src={BestGearMobile}
					alt={"We have the Best Gear"}
					priority
				/>
			</ImageContainer>
		</Container>
	);
};
