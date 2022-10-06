import { FC } from "react";
import { Form, Bottom, ForgetText } from "../styles";
import { loginFormElements } from "../constant";
import { AuthInput, GenButton, Spinner } from "components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import { useMutation } from "@apollo/client";
import { LoginDocument, MutationLoginArgs } from "src/graphql/generated";
import { useActions } from "./actions";

interface props {
	setError: (err: string) => void;
}

//TODO: Add a toast to mark completion
//TODO: create the refresh and revoke token function

export const LoginForm: FC<props> = ({ setError }) => {
	const { removeForm, checkIsEmail } = useActions({});

	const [Login, { loading }] = useMutation(LoginDocument, {
		onCompleted(data) {
			if (data.login?.errors) {
				// handle escaped errors
				const errors = data.login?.errors;
				console.log(errors);
				setError(errors[Object.keys(errors)[0]][0].message);
				return;
			}
			setError("");
			console.log(data);
			reset();
			// router.push("/overview");
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
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = (data: any) => {
		console.log(data);

		const id: string = data.id;
		const isEmail = checkIsEmail(id);

		let param: MutationLoginArgs;

		if (isEmail) {
			param = {
				email: id,
				password: data.password,
			};
		} else {
			param = {
				username: id,
				password: data.password,
			};
		}

		Login({
			variables: param,
		});
	};

	return (
		<Form onSubmit={handleSubmit(handleLogin)}>
			{loginFormElements.map((element, index) => (
				<AuthInput
					{...element}
					key={index}
					register={register}
					error={errors[element.name]}
				/>
			))}

			<Bottom>
				<Link href={"/forget-password"}>
					<a>
						<ForgetText>Forgot password?</ForgetText>
					</a>
				</Link>
			</Bottom>

			<GenButton fullwidth>
				LOGIN {loading ? <Spinner /> : null}
			</GenButton>
		</Form>
	);
};
