import { FC, ReactNode } from "react";
import { Container } from "./genButton.style";
import { colorType } from "types";

interface props {
	children: ReactNode;
	action?: () => void;
	fullwidth?: boolean;
	disabled?: boolean;
	color?: colorType;
}

export const GenButton: FC<props> = ({
	children,
	action,
	fullwidth,
	disabled,
	color = "sienna",
}) => {
	return (
		<Container
			onClick={action}
			full={fullwidth}
			color={color}
			disabled={disabled}
		>
			{children}
		</Container>
	);
};
