import { AiOutlineUser } from "react-icons/ai";
import { Cart } from "containers/icons";
import { UserModal } from "components";

export const iconButtons = [
	{
		name: "cart",
		icon: Cart,
		modal: UserModal,
	},
	{
		name: "user",
		icon: AiOutlineUser,
		modal: UserModal,
	},
];
