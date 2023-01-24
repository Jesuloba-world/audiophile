export const formElements: {
	[key: string]: {
		title: string;
		name: string;
		placeholder: string;
		span2?: boolean;
	}[];
} = {
	"Billing Details": [
		{
			title: "Name",
			name: "name",
			placeholder: "Alexei Ward",
		},
		{
			title: "Email Address",
			name: "email",
			placeholder: "alexei@mail.com",
		},
		{
			title: "Phone Number",
			name: "phone",
			placeholder: "+1 202-555-0136",
		},
	],
	"Shipping info": [
		{
			title: "Address",
			name: "address",
			span2: true,
			placeholder: "1137 Williams Avenue",
		},
		{
			title: "ZIP Code",
			name: "zipcode",
			placeholder: "10001",
		},
		{
			title: "City",
			name: "city",
			placeholder: "New York",
		},
		{
			title: "Country",
			name: "country",
			placeholder: "United States",
		},
	],
};

export const paymentMethods = [
	{
		value: "paystack",
		label: "Paystack",
		name: "payment",
	},
	{
		value: "cashondelivery",
		label: "Cash on Delivery",
		name: "payment",
	},
];
