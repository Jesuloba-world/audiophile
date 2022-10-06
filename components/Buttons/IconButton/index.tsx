import { FC, useEffect, createContext } from "react";
import { Container, ModalContainer, OverLord } from "./button.style";
import { useBackdrop } from "hooks";

interface iconButtonProps {
	name: string;
	Icon: any;
	Modal: () => JSX.Element;
	whichIsActive: "cart" | "user" | undefined;
	setActive: (name: "cart" | "user" | undefined) => void;
}

export const ModalContext = createContext<{ removeModal: () => void }>({
	removeModal: () => {},
});

export const IconButton: FC<iconButtonProps> = ({
	Icon,
	Modal,
	name,
	whichIsActive,
	setActive,
}) => {
	const isActive = whichIsActive === name;
	const { setBackdrop, showBackdrop } = useBackdrop();

	useEffect(() => {
		if (!showBackdrop) {
			setActive(undefined);
		}
	}, [showBackdrop, setActive]);

	const removeModal = () => {
		setActive(undefined);
	};

	return (
		<OverLord>
			<Container
				onClick={() => {
					setActive(isActive ? undefined : (name as "cart" | "user"));
					setBackdrop(!isActive);
				}}
			>
				<Icon />
			</Container>
			{/* TODO: could use some animation */}
			{isActive ? (
				<ModalContext.Provider value={{ removeModal }}>
					<ModalContainer>
						<Modal />
					</ModalContainer>
				</ModalContext.Provider>
			) : null}
		</OverLord>
	);
};
