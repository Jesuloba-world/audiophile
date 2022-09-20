import { FC } from "react";
import { Container, colorType } from "./seeProductButton.style";
import Link from "next/link";
import { hrefType } from "types";

interface seeProductButtonprops {
	slug: string;
	color?: colorType;
}

export const SeeProductButton: FC<seeProductButtonprops> = ({
	slug,
	color,
}) => {
	return (
		<Link href={`/product/${slug}`}>
			<Container color={color}>
				<button>
					<p>See Product</p>
				</button>
			</Container>
		</Link>
	);
};
