import { FC } from "react";
import { Container } from "./style";

interface radioInputProps {
	name: string;
	label: string;
	value: string;
	register: any;
}

export const RadioInput: FC<radioInputProps> = ({
	name,
	label,
	value,
	register,
}) => {
	return (
		<Container>
			<input type="radio" value={value} {...register(name)} />
			{label}
		</Container>
	);
};
