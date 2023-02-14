import { v4 as UUID } from "uuid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useOrder, useBackdrop } from "hooks";
import {
	NewOrderDocument,
	OrderAddressInput,
	NewOrderMutationVariables,
} from "src/graphql/generated";
import { useMutation } from "@apollo/client";

interface arguments {
	amount: number;
	watch: (key: string) => string;
	reset: () => void;
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
}) => {
	const { setBackdrop } = useBackdrop();
	const { setOrder } = useOrder();

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
		setBackdrop(true);
		setOrder(true);
	};

	return {
		handleFlutterPayment: () => handleFlutterPayment(fwConfig),
		afterPayment,
	};
};
