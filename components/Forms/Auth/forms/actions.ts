import { useBackdrop, useLogin } from "hooks";

export const useActions = ({}) => {
	const { setLogin } = useLogin();
	const { setBackdrop } = useBackdrop();

	const removeForm = () => {
		setLogin(false);
		setBackdrop(false);
	};

	const checkIsEmail = (email: string): boolean => {
		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

		return emailRegex.test(email);
	};

	return { removeForm, checkIsEmail };
};
