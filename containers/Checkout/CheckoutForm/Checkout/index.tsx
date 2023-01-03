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

export const Checkout: FC = () => {
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
								/>
							))}
						</SectionInputs>
					</Section>
				);
			})}
		</Container>
	);
};
