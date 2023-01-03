import { FC } from "react";
import { Container, Label, Input } from "./styles";

interface inputProps {
	name: string;
	label: string;
	span?: boolean;
	register: any;
	placeholder: string;
}

export const InputWithLabel: FC<inputProps> = ({
	label,
	name,
	span,
	register,
	placeholder,
}) => {
	return (
		<Container span={span}>
			<Label htmlFor={name}>{label}</Label>
			<Input
				name={name}
				id={name}
				{...register(name)}
				placeholder={placeholder}
			/>
		</Container>
	);
};
