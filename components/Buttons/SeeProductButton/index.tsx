import { FC } from "react";
import { Container } from "./seeProductButton.style";
import { colorType } from "types";
import Link from "next/link";

interface seeProductButtonprops {
	slug: string;
	color: colorType;
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
