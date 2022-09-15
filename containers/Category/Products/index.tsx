import { FC } from "react";
import { Container } from "./product.style";
import { ProductType } from "src/graphql/generated";
import { ProductCard } from "components";

interface props {
	products: ProductType[];
}

export const CategoryProduct: FC<props> = ({ products }) => {
	const sortedArray = [...products].sort((x, y) => {
		return x === y ? 0 : x ? -1 : 1;
	});
	products = sortedArray;
	return (
		<Container>
			{products.map((product, index) => (
				<ProductCard
					key={product.id}
					name={product.name}
					image={product.image}
					description={product.description}
					isNew={product.new}
					slug={product.slug}
					reverse={(index + 1) % 2 == 0}
				/>
			))}
		</Container>
	);
};
