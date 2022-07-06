import { FC } from "react";
import { Container, colorType } from "./seeProductButton.style";
import Link from "next/link";
import { hrefType } from "types";

interface seeProductButtonprops {
	to: hrefType;
	color: colorType;
}

export const SeeProductButton: FC<seeProductButtonprops> = ({ to, color }) => {
	return (
		<Link href={to}>
			<Container color={color}>
				<button>
					<p>See Product</p>
				</button>
			</Container>
		</Link>
	);
};
