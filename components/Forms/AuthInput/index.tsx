import { FC } from "react";
import { Container, FormInput } from "./styles";

interface props {
	label: string;
	type: string;
	name: string;
	id: string;
	register: any;
	error: any;
}

export const AuthInput: FC<props> = ({
	label,
	id,
	register,
	error,
	name,
	...restProps
}) => {
	return (
		<Container>
			<label htmlFor={id}>
				<p>{label}</p>
			</label>
			<FormInput
				className="shadow h-8"
				id={id}
				{...restProps}
				{...register(name)}
			/>
			{/* Error */}
			{error && <p className="text-red-500 text-xs">{error.message}</p>}
		</Container>
	);
};
