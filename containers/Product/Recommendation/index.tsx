import { FC } from "react";
import {
	Container,
	Title,
	ItemsContainer,
	Recommendation,
	ImageContainer,
	TextAndButton,
	Text,
} from "./styles";
import { MiniProductType } from "src/graphql/generated";
import { SeeProductButton } from "components";
import Image from "next/image";

interface props {
	others: MiniProductType[];
}

export const ProductRecommendation: FC<props> = ({ others }) => {
	return (
		<Container>
			<Title>You May Also Like</Title>
			<ItemsContainer>
				{others.map((el) => (
					<Recommendation key={el.id}>
						<ImageContainer>
							<Image
								src={el.image?.desktop as string}
								alt={el.image?.altText as string}
								fill
								sizes="(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw"
								className="desktop"
							/>
							<Image
								src={el.image?.tablet as string}
								alt={el.image?.altText as string}
								fill
								sizes="(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw"
								className="tablet"
							/>
							<Image
								src={el.image?.mobile as string}
								alt={el.image?.altText as string}
								fill
								sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 50vw,
							33vw"
								className="mobile"
							/>
						</ImageContainer>
						<TextAndButton>
							<Text>{el.name}</Text>
							<SeeProductButton
								slug={el.slug as string}
								color={"sienna"}
							/>
						</TextAndButton>
					</Recommendation>
				))}
			</ItemsContainer>
		</Container>
	);
};
