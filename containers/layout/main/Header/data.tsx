import { AiOutlineUser } from "react-icons/ai";
import { Cart } from "containers/icons";
import { UserModal, CartModal } from "components";

export const iconButtons = [
	{
		name: "cart",
		icon: Cart,
		modal: CartModal,
	},
	{
		name: "user",
		icon: AiOutlineUser,
		modal: UserModal,
	},
];
