import { FC } from "react";
import { Form, Bottom, ForgetText } from "../styles";
import { loginFormElements } from "../constant";
import { AuthInput, GenButton, Spinner } from "components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import { useMutation } from "@apollo/client";
import {
	LoginDocument,
	MutationLoginArgs,
	RefreshAndRevokeTokenDocument,
} from "src/graphql/generated";
import { useActions } from "./actions";
import { useTheme } from "styled-components";
import { Puff } from "react-loading-icons";
import toast from "react-hot-toast";
import { checkIsEmail } from "utils";

interface props {
	setError: (err: string) => void;
}

export const LoginForm: FC<props> = ({ setError }) => {
	const { removeForm } = useActions({});
	const theme: any = useTheme();

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
			RefreshAndRevoke({
				variables: { refreshToken: data.login?.refreshToken as string },
			});
		},
		onError(error) {
			if (error.networkError) {
				setError("Network Error!!");
			}
			console.log(error.message);
			console.log(error.graphQLErrors);
		},
	});

	const [RefreshAndRevoke, refreshState] = useMutation(
		RefreshAndRevokeTokenDocument,
		{
			onCompleted(data) {
				reset();
				removeForm();
				toast.success("Login successful");
			},
			onError(error) {
				if (error.networkError) {
					setError("Network Error!!");
				}
				console.log(error.message);
				console.log(error.graphQLErrors);
			},
		}
	);

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
					<ForgetText>Forgot password?</ForgetText>
				</Link>
			</Bottom>

			<GenButton fullwidth disabled={loading || refreshState.loading}>
				{loading || refreshState.loading ? (
					<Puff stroke={theme.white} />
				) : (
					"LOGIN"
				)}
			</GenButton>
		</Form>
	);
};
