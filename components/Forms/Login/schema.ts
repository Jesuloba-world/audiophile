import * as yup from "yup";

export const loginSchema = yup.object().shape({
	id: yup.string().required("Enter a valid username or email address"),
	password: yup.string().required(),
	remember: yup.bool(),
});

export const signUpSchema = yup.object().shape({
	username: yup.string().required("Enter a username"),
	email: yup
		.string()
		.email("Enter your valid email address")
		.required("Enter a valid Email address"),
	password: yup.string().min(8).required(),
	password2: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match")
		.required("Password confirmation is required"),
	agree: yup
		.bool()
		.isTrue("You must agree to the terms and conditions to proceed"),
});
