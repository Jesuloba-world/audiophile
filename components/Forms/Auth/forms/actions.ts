import { useBackdrop, useLogin } from "hooks";

export const useActions = ({}) => {
	const { setLogin } = useLogin();
	const { setBackdrop } = useBackdrop();

	const removeForm = () => {
		setLogin(false);
		setBackdrop(false);
	};

	return { removeForm };
};
