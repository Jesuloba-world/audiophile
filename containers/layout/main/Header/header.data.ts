import { hrefType } from "types";
import Cart from "assets/shared/desktop/icon-cart.svg";
import { AiOutlineUser } from "react-icons/ai";

interface linkType {
	name: string;
	href: hrefType;
}

export const midlinks: linkType[] = [
	{
		name: "home",
		href: "/",
	},
	{
		name: "headphones",
		href: "/headphones",
	},
	{
		name: "speakers",
		href: "/speakers",
	},
	{
		name: "earphones",
		href: "/earphones",
	},
];

export const iconButtons = [
	{ name: "cart", icon: Cart },
	{ name: "user", icon: AiOutlineUser },
];
