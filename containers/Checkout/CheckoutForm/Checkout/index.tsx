import { FC } from "react";
import {
	Container,
	Heading,
	SectionTitle,
	Section,
	SectionInputs,
} from "./styles";
import { formElements } from "./constants";
import { InputWithLabel } from "components";

interface props {
	register: any;
}

export const Checkout: FC<props> = ({ register }) => {
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
								/>
							))}
						</SectionInputs>
					</Section>
				);
			})}
		</Container>
	);
};
