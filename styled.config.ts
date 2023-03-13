interface Theme {
	black: string;
	smoky: string;
	grey: string;
	sienna: string;
	light_salmon: string;
	cultured: string;
	grey_white: string;
	white: string;
	light_grey: string;
	error: string;
}

export const theme: Theme = {
	black: "#000000",
	smoky: "#101010",
	grey: "#4C4C4C",
	sienna: "#D87D4A",
	light_salmon: "#FBAF85",
	cultured: "#F1F1F1",
	grey_white: "#FAFAFA",
	white: "#FFFFFF",
	light_grey: "#CFCFCF",
	error: "#CD2C2C",
};

const size = {
	desktop: "68.75em", // 1100px
	desktopS: "62.5em", //1000px
	tablet: "50em", //800px
	tablet700: "43.75em", //700px
	tablet600: "37.5em", //600px
	tablet500: "31.25em", //500px
	mobile: "25em", //400px
	mobileS: "21.875em", //350px
};

export const devices = {
	desktop: `(max-width: ${size.desktop})`,
	desktopS: `(max-width: ${size.desktopS})`,
	tablet: `(max-width: ${size.tablet})`,
	tablet700: `(max-width: ${size.tablet700})`,
	tablet600: `(max-width: ${size.tablet600})`,
	tablet500: `(max-width: ${size.tablet500})`,
	mobile: `(max-width: ${size.mobile})`,
	mobileS: `(max-width: ${size.mobileS})`,
};
