export const formElements: {
	[key: string]: {
		title: string;
		name: string;
		span2?: boolean;
	}[];
} = {
	"Billing Details": [
		{
			title: "Name",
			name: "name",
		},
		{
			title: "Email Address",
			name: "email",
		},
		{
			title: "Phone Number",
			name: "phone",
		},
	],
	"Shipping info": [
		{
			title: "Address",
			name: "address",
			span2: true,
		},
		{
			title: "ZIP Code",
			name: "zipcode",
		},
		{
			title: "City",
			name: "city",
		},
		{
			title: "Country",
			name: "country",
		},
	],
};
