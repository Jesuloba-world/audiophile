import { FC } from "react";
import { Container } from "./featured.style";
import { featuredProducts } from "./data";
import { FeaturedLarge, FeaturedNormal, FeaturedBroken } from "./Variants";

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
								content={el.content!}
								slug={el.slug}
								key={index}
							/>
						);
					case "normal":
						return (
							<FeaturedNormal
								key={index}
								image={el.image}
								name={el.name}
								slug={el.slug}
							/>
						);
					case "broken":
						return (
							<FeaturedBroken
								key={index}
								image={el.image}
								name={el.name}
								slug={el.slug}
							/>
						);
				}
			})}
		</Container>
	);
};
