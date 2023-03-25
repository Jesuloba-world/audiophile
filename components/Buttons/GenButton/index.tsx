import { FC, ReactNode } from "react";
import { Container } from "./genButton.style";
import { colorType } from "types";

interface props {
	children: ReactNode;
	action?: () => void;
	fullwidth?: boolean;
	disabled?: boolean;
	color?: colorType;
	type?: "submit" | "button" | "reset";
}

export const GenButton: FC<props> = ({
	children,
	action,
	fullwidth,
	disabled,
	color = "sienna",
	type,
}) => {
	return (
		<Container
			onClick={action}
			full={fullwidth}
			color={color}
			disabled={disabled}
			type={type}
		>
			{children}
		</Container>
	);
};
