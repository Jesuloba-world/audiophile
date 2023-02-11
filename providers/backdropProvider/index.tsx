import { FC, ReactNode } from "react";
import { useBackdrop, useLogin, useOrder } from "hooks";
import { BackDrop } from "./styles";

export const BackdropProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { showLogin } = useLogin();
	const { showOrder } = useOrder();

	const { setBackdrop, showBackdrop } = useBackdrop();

	return (
		<>
			{showBackdrop ? (
				<BackDrop
					highz={showLogin || showOrder}
					onClick={() => {
						if (!(showLogin || showOrder)) {
							setBackdrop(false);
						}
					}}
				/>
			) : null}
			{children}
		</>
	);
};
