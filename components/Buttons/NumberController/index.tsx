import { FC } from "react";
import { Container, ControlButton, Number } from "./controller.style";

interface props {
	number: number;
	increment: () => void;
	decrement: () => void;
	small?: boolean;
}

export const NumberController: FC<props> = ({
	number,
	decrement,
	increment,
	small,
}) => {
	return (
		<Container small={!!small}>
			<ControlButton onClick={decrement}>{"-"}</ControlButton>
			<Number>{number}</Number>
			<ControlButton onClick={increment}>{"+"}</ControlButton>
		</Container>
	);
};
