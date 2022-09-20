import { FC } from "react";
import {
	Container,
	Features,
	InTheBox,
	Title,
	Text,
	IncludedContainer,
	Included,
	Quantity,
} from "./feature.style";
import { Maybe, IncludedType } from "src/graphql/generated";

interface props {
	feature: Maybe<string> | undefined;
	includes: IncludedType[];
}

export const ProductFeatures: FC<props> = ({ feature, includes }) => {
	return (
		<Container>
			<Features>
				<Title>Features</Title>
				<Text>{feature}</Text>
			</Features>
			<InTheBox>
				<Title>In the box</Title>
				<IncludedContainer>
					{includes.map((include) => (
						<Included key={include.id}>
							<Quantity>{include.quantity}x</Quantity>
							<Text>{include.item}</Text>
						</Included>
					))}
				</IncludedContainer>
			</InTheBox>
		</Container>
	);
};
