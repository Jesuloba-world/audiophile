import { FC } from "react";
import { Container, Label, Input, Top, Error } from "./styles";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface inputProps {
	name: string;
	label: string;
	span?: boolean;
	register: any;
	placeholder?: string;
	error?: string;
}

export const InputWithLabel: FC<inputProps> = ({
	label,
	name,
	span,
	register,
	placeholder,
	error,
	...restprops
}) => {
	const isError = !!error;

	return (
		<Container span={span}>
			<Top>
				<Label htmlFor={name} isError={isError}>
					{label}
				</Label>
				<Error>{error}</Error>
			</Top>
			<Input
				name={name}
				id={name}
				{...restprops}
				{...register(name)}
				placeholder={placeholder}
				isError={isError}
			/>
		</Container>
	);
};
