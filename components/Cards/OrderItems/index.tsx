import { FC, useState } from "react";
import {
	Container,
	Items,
	Grand,
	Divider,
	ItemContainer,
	Others,
	Item,
	NamePrice,
	Name,
	Price,
	Quantity,
} from "./style";
import { OrderProductType } from "src/graphql/generated";
import numeral from "numeral";
import Image from "next/image";

interface orderItemsProps {
	items: OrderProductType[];
	grandTotal: number;
}

export const OrderItems: FC<orderItemsProps> = ({ items, grandTotal }) => {
	const [showAll, setShowAll] = useState(false);

	const toggleShow = () => {
		setShowAll((prev) => !prev);
	};

	const showNumber = showAll ? items.length : 1;

	return (
		<Container>
			<Items>
				<ItemContainer>
					{items?.slice(0, showNumber).map((item) => (
						<Item key={item.id}>
							<Image
								src={item.product?.image?.desktop as string}
								alt={item.product?.image?.altText as string}
								height={50}
								width={50}
							/>
							<NamePrice>
								<Name>{item.product?.shortName}</Name>
								<Price>
									{numeral(item.product?.price).format(
										"$0,0"
									)}
								</Price>
							</NamePrice>
							<Quantity>x{item.quantity}</Quantity>
						</Item>
					))}
				</ItemContainer>
				{!(items?.length <= 1) && !(items === undefined) ? (
					<>
						<Divider />
						<Others onClick={toggleShow}>
							{showAll
								? "View less"
								: `and ${items?.length - 1} other item(s)`}
						</Others>
					</>
				) : null}
			</Items>
			<Grand>
				<p>Grand Total</p>
				<h6>${numeral(grandTotal).format("0,0")}</h6>
			</Grand>
		</Container>
	);
};
