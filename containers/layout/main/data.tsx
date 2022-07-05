import { hrefType } from "types";
import { AiOutlineUser } from "react-icons/ai";
import { Cart, IconFacebook, IconInstagram, IconTwitter } from "./icons";

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

export const footerNote =
	"Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.";

export const socialIcons = [
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
