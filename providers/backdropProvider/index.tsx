import { FC, ReactNode } from "react";
import { useBackdrop, useLogin } from "hooks";
import { BackDrop } from "./styles";

export const BackdropProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { showLogin } = useLogin();

	const { setBackdrop, showBackdrop } = useBackdrop();

	return (
		<>
			{showBackdrop ? (
				<BackDrop
					isLogin={showLogin}
					onClick={() => {
						if (!showLogin) {
							setBackdrop(false);
						}
					}}
				/>
			) : null}
			{children}
		</>
	);
};
