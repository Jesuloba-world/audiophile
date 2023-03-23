import { FC } from "react";
import { Container } from "./featured.style";
import { FeaturedLarge, FeaturedNormal, FeaturedBroken } from "./Variants";
import { FeaturedProductType, ProductImageType } from "src/graphql/generated";

interface featuredProps {
	data: FeaturedProductType[];
}

export const Featured: FC<featuredProps> = ({ data }) => {
	return (
		<Container>
			{data.map((el, index) => {
				switch (el.boxType) {
					case "BIG":
						return (
							<FeaturedLarge
								key={index}
								image={el.image?.desktop as string}
								tablet={el.image?.tablet as string}
								name={el.product.name as string}
								content={el.copy as string}
								slug={el.product.slug as string}
							/>
						);
					case "NORMAL":
						return (
							<FeaturedNormal
								key={index}
								image={el.image as ProductImageType}
								name={el.product.name as string}
								slug={el.product.slug as string}
							/>
						);
					case "BROKEN":
						return (
							<FeaturedBroken
								key={index}
								image={el.image as ProductImageType}
								name={el.product.name as string}
								slug={el.product.slug as string}
							/>
						);
				}
			})}
		</Container>
	);
};
