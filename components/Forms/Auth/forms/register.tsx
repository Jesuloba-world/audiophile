import { FC } from "react";
import { Form, Bottom, ErrorText } from "../styles";
import { signupFormElements } from "../constant";
import { AuthInput, GenButton } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema";
import { useMutation } from "@apollo/client";
import { RegisterDocument, MutationRegisterArgs } from "src/graphql/generated";
import { useActions } from "./actions";

interface props {
	setError: (err: string) => void;
}

export const RegisterForm: FC<props> = ({ setError }) => {
	const { removeForm } = useActions({});

	const [Register, { loading }] = useMutation(RegisterDocument, {
		errorPolicy: "none",
		onCompleted(data) {
			if (data.register?.errors) {
				// handle escaped errors
				const errors = data.register?.errors;
				setError(errors[Object.keys(errors)[0]][0].message);
				return;
			}
			setError("");
			reset();
			console.log(data);
			removeForm();
		},
		onError(error) {
			if (error.networkError) {
				setError("Network Error!!");
			}
			console.log(error.message);
			console.log(error.graphQLErrors);
		},
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(signUpSchema),
	});

	const handleRegister = (data: any) => {
		const param: MutationRegisterArgs = {
			username: data.username,
			email: data.email,
			password1: data.password,
			password2: data.password2,
		};

		Register({
			variables: param,
		});
	};

	return (
		<Form onSubmit={handleSubmit(handleRegister)}>
			{signupFormElements.map((element, index) => (
				<AuthInput
					{...element}
					key={index}
					register={register}
					error={errors[element.name]}
				/>
			))}

			<Bottom stack>
				<div className="flex gap-1 items-center cursor-pointer">
					<input
						type="checkbox"
						id="agree"
						className="cursor-pointer"
						{...register("agree")}
					/>
					<label
						htmlFor="agree"
						className="text-sm font-medium cursor-pointer"
					>
						I agree with terms and conditions
					</label>
				</div>
				{errors["agree"] && (
					<ErrorText>{errors["agree"].message as string}</ErrorText>
				)}
			</Bottom>

			<GenButton fullwidth>Create account {/*Loading here*/}</GenButton>
		</Form>
	);
};
