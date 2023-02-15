import { v4 as UUID } from "uuid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useOrder, useBackdrop } from "hooks";
import {
	NewOrderDocument,
	OrderAddressInput,
	NewOrderMutationVariables,
} from "src/graphql/generated";

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
	const { setOrder, setInfo } = useOrder();

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
			console.log(response);
			reset();
			closePaymentModal();
			afterPayment();
		},
		onClose: () => {},
	};

	const handleFlutterPayment = useFlutterwave(config);

	const afterPayment = () => {
		const [address, payment] = getAddressAndPayment();
		console.log(address, payment, amount);

		setInfo({
			address: address,
			paymentMethod: payment,
			totalPrice: amount,
		});

		setBackdrop(true);
		setOrder(true);
	};

	return {
		handleFlutterPayment: () => handleFlutterPayment(fwConfig),
		afterPayment,
	};
};
