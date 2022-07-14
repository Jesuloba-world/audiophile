import { hrefType, httplinkType } from "types";
import { AiOutlineUser } from "react-icons/ai";
import {
	Cart,
	IconFacebook,
	IconInstagram,
	IconTwitter,
} from "containers/icons";

interface linkType {
	name: string;
	href: hrefType;
}

interface iconlinkType {
	Icon: () => JSX.Element;
	link: httplinkType;
}

export const midlinks: linkType[] = [
	{
		name: "home",
		href: "/",
	},
	{
		name: "headphones",
		href: "/category/headphones",
	},
	{
		name: "speakers",
		href: "/category/speakers",
	},
	{
		name: "earphones",
		href: "/category/earphones",
	},
];

export const iconButtons = [
	{ name: "cart", icon: Cart },
	{ name: "user", icon: AiOutlineUser },
];

export const footerNote =
	"Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.";

export const socialIcons: iconlinkType[] = [
	{
		Icon: IconFacebook,
		link: "http://www.facebook.com",
	},
	{
		Icon: IconTwitter,
		link: "http://www.twitter.com",
	},
	{
		Icon: IconInstagram,
		link: "http://www.instagram.com",
	},
];

export const copyrightText = "Copyright 2022. All Rights Reserved";
