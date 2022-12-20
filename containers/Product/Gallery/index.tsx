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
					sizes="(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw"
				/>
			</First>
			<Second>
				<Image
					src={second?.desktop as string}
					alt={second?.altText as string}
					fill
					sizes="(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw"
				/>
			</Second>
			<Third>
				<Image
					src={third?.desktop as string}
					alt={third?.altText as string}
					fill
					// priority={true}
					sizes="(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw"
				/>
			</Third>
		</Container>
	);
};
