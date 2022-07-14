import { FC } from "react";
import {
	Container,
	OneCategory,
	GreyInside,
	TextContainer,
	LinkText,
	Imager,
} from "./category.style";
// import { categories } from "./data";
import Image from "next/image";
import { ArrowRight } from "containers/icons";
import { CategoryType } from "src/graphql/generated";

interface categoryProps {
	home: boolean | undefined;
	categories: CategoryType[];
}

export const CategoryPick: FC<categoryProps> = ({ home, categories }) => {
	return (
		<Container home={home}>
			{categories.map((el) => {
				return (
					<OneCategory key={el.id}>
						<GreyInside href={`/category/${el.slug}`}>
							<Imager>
								<Image
									src={el.image?.image!}
									alt={el.image?.altText!}
									height={150}
									width={150}
									objectFit="contain"
								/>
							</Imager>
							<TextContainer>
								<h6>{el.name}</h6>
								<LinkText>
									<p>shop</p> <ArrowRight />
								</LinkText>
							</TextContainer>
						</GreyInside>
					</OneCategory>
				);
			})}
		</Container>
	);
};
