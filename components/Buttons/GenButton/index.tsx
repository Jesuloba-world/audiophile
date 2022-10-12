import { FC, ReactNode } from "react";
import { Container } from "./genButton.style";

interface props {
	children: ReactNode;
	action?: () => void;
	fullwidth?: boolean;
	disabled?: boolean;
}

export const GenButton: FC<props> = ({
	children,
	action,
	fullwidth,
	disabled,
}) => {
	return (
		<Container onClick={action} full={fullwidth} disabled={disabled}>
			{children}
		</Container>
	);
};
