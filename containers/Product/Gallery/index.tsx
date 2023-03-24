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
	console.log(third?.mobile);
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
					className="desktop"
				/>
				<Image
					src={first?.tablet as string}
					alt={first?.altText as string}
					fill
					className="tablet"
				/>
				<Image
					src={first?.mobile as string}
					alt={first?.altText as string}
					fill
					className="mobile"
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
					className="desktop"
				/>
				<Image
					src={second?.tablet as string}
					alt={second?.altText as string}
					fill
					className="tablet"
				/>
				<Image
					src={second?.mobile as string}
					alt={second?.altText as string}
					fill
					className="mobile"
				/>
			</Second>
			<Third>
				<Image
					src={third?.desktop as string}
					alt={third?.altText as string}
					fill
					sizes="(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw"
					className="desktop"
				/>
				<Image
					src={third?.tablet as string}
					alt={third?.altText as string}
					fill
					className="tablet"
				/>
				<Image
					src={third?.mobile as string}
					alt={third?.altText as string}
					fill
					// priority
					sizes="(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw"
					className="mobile"
				/>
			</Third>
		</Container>
	);
};
