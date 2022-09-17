import { FC } from "react";
import { Container, ControlButton, Number } from "./controller.style";

interface props {
	number: number;
	increment: () => void;
	decrement: () => void;
}

export const NumberController: FC<props> = ({
	number,
	decrement,
	increment,
}) => {
	return (
		<Container>
			<ControlButton onClick={decrement}>{"-"}</ControlButton>
			<Number>{number}</Number>
			<ControlButton onClick={increment}>{"+"}</ControlButton>
		</Container>
	);
};
