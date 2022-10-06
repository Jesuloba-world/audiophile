import { FC } from "react";
import { Form, Bottom, CheckboxWrapper, ForgetText } from "../styles";
import { loginFormElements } from "../constant";
import { AuthInput, GenButton } from "components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import { useMutation } from "@apollo/client";
import { LoginDocument, MutationLoginArgs } from "src/graphql/generated";
import { useActions } from "./actions";

interface paramType extends MutationLoginArgs {
	remember: boolean;
}
interface props {
	setError: (err: string) => void;
}

export const LoginForm: FC<props> = ({ setError }) => {
	const { removeForm, checkIsEmail } = useActions({});

	const [Login, { loading }] = useMutation(LoginDocument, {
		errorPolicy: "none",
		onCompleted(data) {
			if (data.login?.errors) {
				// handle escaped errors
				const errors = data.login?.errors;
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

		let param: paramType;

		if (isEmail) {
			param = {
				email: id,
				password: data.password,
				remember: data.remember,
			};
		} else {
			param = {
				username: id,
				password: data.password,
				remember: data.remember,
			};
		}

		// set remember to localStorage
		if (data.remember) {
			localStorage.setItem("remember", "true");
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
				<CheckboxWrapper>
					<input
						type="checkbox"
						id="remember"
						{...register("remember")}
					/>
					<label htmlFor="remember">
						<p>Remember me</p>
					</label>
				</CheckboxWrapper>

				<Link href={"/forget-password"}>
					<a>
						<ForgetText>Forgot password?</ForgetText>
					</a>
				</Link>
			</Bottom>

			<GenButton fullwidth>LOGIN {/*Loading here*/}</GenButton>
		</Form>
	);
};
