import { FC, useState } from "react";
import { useTheme } from "styled-components";
import { Form, Bottom, ErrorText, CheckboxWrapper } from "../styles";
import { signupFormElements } from "../constant";
import { AuthInput, GenButton, Spinner } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema";
import { useMutation } from "@apollo/client";
import {
	RegisterDocument,
	MutationRegisterArgs,
	RefreshAndRevokeTokenDocument,
} from "src/graphql/generated";
import { useActions } from "./actions";
import { Puff } from "react-loading-icons";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface props {
	setError: (err: string) => void;
}

export const RegisterForm: FC<props> = ({ setError }) => {
	const { removeForm } = useActions({});
	const theme: any = useTheme();
	const [loading, setLoading] = useState(false);

	// const [Register, { loading }] = useMutation(RegisterDocument, {
	// 	onCompleted(data) {
	// 		if (data.register?.errors) {
	// 			// handle escaped errors
	// 			const errors = data.register?.errors;
	// 			setError(errors[Object.keys(errors)[0]][0].message);
	// 			return;
	// 		}
	// 		setError("");
	// 		console.log(data);
	// 		RefreshAndRevoke({
	// 			variables: {
	// 				refreshToken: data.register?.refreshToken as string,
	// 			},
	// 		});
	// 	},
	// 	onError(error) {
	// 		if (error.networkError) {
	// 			setError("Network Error!!");
	// 		}
	// 		console.log(error.message);
	// 		console.log(error.graphQLErrors);
	// 	},
	// });

	// const [RefreshAndRevoke, refreshState] = useMutation(
	// 	RefreshAndRevokeTokenDocument,
	// 	{
	// 		onCompleted(data) {
	// 			reset();
	// 			removeForm();
	// 			toast.success("Account created Successfully");
	// 		},
	// 		onError(error) {
	// 			if (error.networkError) {
	// 				setError("Network Error!!");
	// 			}
	// 			console.log(error.message);
	// 			console.log(error.graphQLErrors);
	// 		},
	// 	}
	// );

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(signUpSchema),
	});

	const handleRegister = async (data: any) => {
		setLoading(true);

		const param: MutationRegisterArgs = {
			username: data.username,
			email: data.email,
			password1: data.password,
			password2: data.password2,
		};

		const response = await signIn("register", {
			...param,
			redirect: false,
		});

		if (response?.ok) {
			setLoading(false);
			reset();
			removeForm();
			toast.success("Account created successfully");
		}
		if (response?.error) {
			setLoading(false);
			setError(response.error);
		}
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
				<CheckboxWrapper>
					<input type="checkbox" id="agree" {...register("agree")} />
					<label htmlFor="agree">
						<p>I agree with terms and conditions</p>
					</label>
				</CheckboxWrapper>
				{errors["agree"] && (
					<ErrorText>{errors["agree"].message as string}</ErrorText>
				)}
			</Bottom>

			<GenButton fullwidth disabled={loading}>
				{loading ? <Puff stroke={theme.white} /> : "Create account"}
			</GenButton>
		</Form>
	);
};
