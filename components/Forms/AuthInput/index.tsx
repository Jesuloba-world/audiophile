import { FC } from "react";
import { Container, FormInput, ErrorText, Top } from "./styles";

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
			<Top>
				<label htmlFor={id}>
					<p>{label}</p>
				</label>
				{error && <ErrorText>{error.message}</ErrorText>}
			</Top>
			<FormInput
				className="shadow h-8"
				id={id}
				{...restProps}
				{...register(name)}
			/>
		</Container>
	);
};
