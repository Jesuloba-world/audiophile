import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	phone: yup
		.string()
		.matches(
			/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
			"not valid phone number"
		)
		.required(),
	address: yup.string().required(),
	zipcode: yup
		.string()
		.min(5, "not valid zipcode")
		.max(6, "not valid zipcode")
		.matches(/\d+/, "only numbers allowed")
		.required(),
	city: yup.string().required(),
	country: yup.string().required(),
	payment: yup.string().required(),
});
