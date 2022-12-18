import { FC } from "react";
import { Container, First, Second, Third } from "./gallery.style";
import { Maybe, ProductImageType } from "src/graphql/generated";
import Image from "next/image";

interface props {
	first?: Maybe<ProductImageType>;
	second?: Maybe<ProductImageType>;
	third?: Maybe<ProductImageType>;
}

export const ProductGallery: FC<props> = ({ first, second, third }) => {
	return (
		<Container>
			<First>
				<Image
					src={first?.desktop as string}
					alt={first?.altText as string}
					fill
				/>
			</First>
			<Second>
				<Image
					src={second?.desktop as string}
					alt={second?.altText as string}
					fill
				/>
			</Second>
			<Third>
				<Image
					src={third?.desktop as string}
					alt={third?.altText as string}
					fill
				/>
			</Third>
		</Container>
	);
};
