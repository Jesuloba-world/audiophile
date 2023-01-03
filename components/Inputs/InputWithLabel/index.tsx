import { FC } from "react";
import { Container, Label, Input } from "./styles";

interface inputProps {
	name: string;
	label: string;
	span?: boolean;
}

export const InputWithLabel: FC<inputProps> = ({ label, name, span }) => {
	return (
		<Container span={span}>
			<Label htmlFor={name}>{label}</Label>
			<Input name={name} id={name} />
		</Container>
	);
};
