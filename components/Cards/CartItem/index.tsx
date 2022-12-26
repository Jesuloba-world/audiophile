import { FC, useEffect, useState } from "react";
import {
	Container,
	TextAndImage,
	Name,
	Price,
	Text,
	ControllerContainer,
} from "./styles";
import Image from "next/image";
import numeral from "numeral";
import { NumberController } from "components";
import { useMutation } from "@apollo/client";
import { AddToCartDocument, MyCartDocument } from "src/graphql/generated";
import { createTakeLatest } from "utils";
import { useDispatch, useSelector } from "react-redux";
import {
	addCartItem,
	removeCartItem,
	setCartItem,
} from "store/slice/cartSlice";

interface cartItemsProps {
	id?: string;
	image?: string;
	altText?: string | null;
	name: string | null | undefined;
	price: any;
	quantity?: number;
}

export const CartItem: FC<cartItemsProps> = ({
	id,
	image,
	altText,
	name,
	price,
	quantity,
}) => {
	const dispatch = useDispatch();

	const [modifyCart, { loading }] = useMutation(AddToCartDocument, {
		onCompleted: (data) => {
			setChangeNumber(0);
		},
		awaitRefetchQueries: true,
		refetchQueries: [{ query: MyCartDocument }],
	});

	const [changeNumber, setChangeNumber] = useState(0);
	const takelatest = createTakeLatest();
	const quan = quantity ? quantity : 0;

	useEffect(() => {
		dispatch(addCartItem(id as string));

		return () => {
			dispatch(removeCartItem(id as string));
		};
	}, [dispatch, id]);

	useEffect(() => {
		dispatch(setCartItem({ id: id as string, isLoading: loading }));
	}, [dispatch, id, loading]);

	const increment = () => {
		setChangeNumber((prev) => {
			const change = prev + 1;
			const newNumber = quan + change;
			takelatest(
				modifyCart({
					variables: {
						productId: id as string,
						quantity: newNumber,
					},
				})
			);
			return change;
		});
	};

	const decrement = () => {
		setChangeNumber((prev) => {
			const change = prev - 1;
			const newNumber = quan + change;
			if (newNumber <= 0) {
				return prev;
			} else {
				takelatest(
					modifyCart({
						variables: {
							productId: id as string,
							quantity: newNumber,
						},
					})
				);
				return change;
			}
		});
	};

	return (
		<Container>
			<TextAndImage>
				<Image
					src={image as string}
					alt={altText as string}
					height={64}
					width={64}
				/>
				<Text>
					<Name>{name}</Name>
					<Price>{numeral(price).format("$0,0")}</Price>
				</Text>
			</TextAndImage>
			<ControllerContainer>
				<NumberController
					increment={increment}
					number={quan + changeNumber}
					decrement={decrement}
					small
				/>
			</ControllerContainer>
		</Container>
	);
};
