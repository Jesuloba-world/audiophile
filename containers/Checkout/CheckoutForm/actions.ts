import { v4 as UUID } from "uuid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useOrder, useBackdrop } from "hooks";
import {
	CreateNewOrderDocument,
	OrderAddressInput,
	MyCartDocument,
	OrderType,
	GetOrderDocument,
} from "src/graphql/generated";
import { useMutation } from "@apollo/client";

interface arguments {
	amount: number;
	watch: (key: string) => string;
	reset: () => void;
	getValues: (key: string | string[]) => string | string[];
}

interface output {
	handleFlutterPayment: () => void;
	afterPayment: () => void;
}

type usePaymentActionType = ({}: arguments) => output;

export const usePaymentAction: usePaymentActionType = ({
	amount,
	watch,
	reset,
	getValues,
}) => {
	const { setBackdrop } = useBackdrop();
	const { setOrder, setInfo, loadOrder } = useOrder();
	const [newOrder] = useMutation(CreateNewOrderDocument);

	const config = {
		public_key: process.env.NEXT_PUBLIC_FLUTTER_PUBLIC_KEY!,
		tx_ref: UUID(),
		amount: amount / 100,
		currency: "USD",
		payment_options: "card, ussd",
		customer: {
			email: watch("email"),
			phone_number: watch("phone"),
			name: watch("name"),
		},
		customizations: {
			title: "Audiophile",
			description: "Payment for items in cart",
			logo: "",
		},
	};

	const getAddressAndPayment: () => [OrderAddressInput, string] = () => {
		const [
			emailAddress,
			phoneNumber,
			name,
			address,
			zipcode,
			city,
			country,
		] = getValues([
			"email",
			"phone",
			"name",
			"address",
			"zipcode",
			"city",
			"country",
		]);

		const addressInput: OrderAddressInput = {
			address,
			city,
			country,
			emailAddress,
			name,
			phoneNumber,
			zipcode,
		};

		const paymentMethod: string = getValues("payment") as string;

		return [addressInput, paymentMethod];
	};

	const fwConfig = {
		callback: (response: any) => {
			// console.log(response);
			closePaymentModal();
			afterPayment();
		},
		onClose: () => {},
	};

	const handleFlutterPayment = useFlutterwave(config);

	const afterPayment = async () => {
		const [address, payment] = getAddressAndPayment();
		setBackdrop(true);
		setOrder(true);
		reset();

		loadOrder();
		try {
			const response: any = await newOrder({
				variables: {
					address: address,
					paymentMethod: payment,
					totalPrice: amount,
				},
				awaitRefetchQueries: true,
				refetchQueries: [
					{ query: MyCartDocument },
					{ query: GetOrderDocument },
				],
			});

			console.log(response);

			setInfo(response.data?.newOrder.order as OrderType);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		handleFlutterPayment: () => handleFlutterPayment(fwConfig),
		afterPayment,
	};
};
