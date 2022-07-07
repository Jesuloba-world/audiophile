import { FC } from "react";
import { Container } from "./featured.style";
import { featuredProducts } from "./data";
import { FeaturedLarge } from "./Variants";

export const Featured: FC = () => {
	return (
		<Container>
			{featuredProducts.map((el, index) => {
				switch (el.type) {
					case "large":
						return (
							<FeaturedLarge
								image={el.image}
								name={el.name}
								content={el.content}
								slug={el.slug}
								key={index}
							/>
						);
				}
			})}
		</Container>
	);
};
