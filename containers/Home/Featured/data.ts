import ZX9Image from "assets/home/desktop/image-speaker-zx9.png";
import ZX7Image from "assets/home/desktop/image-speaker-zx7.jpg";
import YX1Image from "assets/home/desktop/image-earphones-yx1.jpg";

export interface featuredType {
	name: string;
	content?: string;
	image: any;
	type: "large" | "normal" | "broken";
	slug: string;
}

export const featuredProducts: featuredType[] = [
	{
		name: "ZX9 SPEAKER",
		content:
			"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
		image: ZX9Image,
		type: "large",
		slug: "zx9_speaker",
	},
	{
		name: "ZX7 SPEAKER",
		image: ZX7Image,
		type: "normal",
		slug: "zx7_speaker",
	},
	{
		name: "YX1 EARPHONES",
		image: YX1Image,
		type: "broken",
		slug: "yx1_earphones",
	},
];
