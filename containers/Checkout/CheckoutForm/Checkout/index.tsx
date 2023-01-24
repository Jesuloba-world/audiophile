import { FC } from "react";
import {
	Container,
	Heading,
	SectionTitle,
	Section,
	SectionInputs,
	PaymentTitle,
	PaymentMethods,
} from "./styles";
import { formElements, paymentMethods } from "./constants";
import { InputWithLabel, RadioInput } from "components";
import { FieldErrorsImpl } from "react-hook-form";

interface props {
	register: any;
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any;
		}>
	>;
}

export const Checkout: FC<props> = ({ register, errors }) => {
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
				</SectionInputs>
			</Section>
		</Container>
	);
};
