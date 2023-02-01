import { FC } from "react";
import {
	Container,
	Heading,
	SectionTitle,
	Section,
	SectionInputs,
	PaymentTitle,
	PaymentMethods,
	PaymentInfo,
	IconContainer,
	Text,
} from "./styles";
import { formElements, paymentMethods } from "./constants";
import { InputWithLabel, RadioInput } from "components";
import { FieldErrorsImpl } from "react-hook-form";
import CashOnDelivery from "assets/checkout/cashOnDelivery.svg";
import CreditCardPay from "assets/checkout/credit-card-pay.svg";

interface props {
	register: any;
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any;
		}>
	>;
	selectedPayment: string;
}

export const Checkout: FC<props> = ({ register, errors, selectedPayment }) => {
	const isCashOnDelivery = selectedPayment === "cashondelivery";

	return (
		<Container>
			<Heading>Checkout</Heading>
			{Object.keys(formElements).map((key, index) => {
				return (
					<Section key={index}>
						<SectionTitle>{key}</SectionTitle>
						<SectionInputs>
							{formElements[key].map((el, index) => (
								<InputWithLabel
									key={index}
									label={el.title}
									name={el.name}
									span={el.span2}
									placeholder={el.placeholder}
									register={register}
									error={errors[el.name]?.message as string}
								/>
							))}
						</SectionInputs>
					</Section>
				);
			})}
			<Section>
				<SectionTitle>Payment details</SectionTitle>
				<SectionInputs>
					<PaymentTitle error={!!errors["payment"]?.message}>
						Payment Method
					</PaymentTitle>
					<PaymentMethods>
						{paymentMethods.map((method, index) => (
							<RadioInput
								key={index}
								name={method.name}
								label={method.label}
								value={method.value}
								register={register}
							/>
						))}
					</PaymentMethods>
					{/* TODO: add the description text under */}
					<PaymentInfo>
						<IconContainer>
							{isCashOnDelivery ? (
								<CashOnDelivery />
							) : (
								<CreditCardPay />
							)}
						</IconContainer>
						<Text>
							{isCashOnDelivery
								? "The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled. Not real 😉."
								: "Don't worry your money will not be deducted. Not real 😉."}
						</Text>
					</PaymentInfo>
				</SectionInputs>
			</Section>
		</Container>
	);
};
