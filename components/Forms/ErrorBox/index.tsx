import { FC } from "react";
import { MdErrorOutline } from "react-icons/md";
import { Container } from "./styles";

interface ErrorBoxProps {
	error: string;
}

export const ErrorBox: FC<ErrorBoxProps> = ({ error }) => {
	return (
		<Container>
			<MdErrorOutline />
			<p className="text-sm">{error}</p>
		</Container>
	);
};
