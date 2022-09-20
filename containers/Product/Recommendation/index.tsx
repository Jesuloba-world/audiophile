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
								layout="fill"
								objectFit="cover"
							/>
						</ImageContainer>
						<TextAndButton>
							<Text>{el.name}</Text>
							<SeeProductButton
								to={`/product/${el.slug}`}
								color={"sienna"}
							/>
						</TextAndButton>
					</Recommendation>
				))}
			</ItemsContainer>
		</Container>
	);
};
