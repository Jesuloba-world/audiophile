import { FC } from "react";
import {
	Container,
	OneCategory,
	GreyInside,
	TextContainer,
	LinkText,
	Imager,
} from "./category.style";
import { categories } from "./data";
import Image from "next/image";
import { ArrowRight } from "containers/icons";

export const Category: FC = () => {
	return (
		<Container>
			{categories.map((el, index) => {
				return (
					<OneCategory key={index}>
						<GreyInside href={`/category/${el.slug}`}>
							<Imager>
								<Image
									src={el.image}
									alt={el.name.toLowerCase()}
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
