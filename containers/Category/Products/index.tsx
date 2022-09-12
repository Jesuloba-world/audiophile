import { FC } from "react";
import { Container } from "./product.style";
import { ProductType } from "src/graphql/generated";
import { ProductCard } from "components";

interface props {
	products: ProductType[];
}

export const CategoryProduct: FC<props> = ({ products }) => {
	console.log(products);
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
