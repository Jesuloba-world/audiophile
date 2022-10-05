import { FC, useState } from "react";
import { Container, Form } from "./styles";
import { loginFormElements, signupFormElements } from "./constant";
import { Input, GenButton } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";
import Link from "next/link";

interface props {}

export const LoginForm: FC<props> = () => {
	const [isLogin, setIsLogin] = useState(true);

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
	};

	return (
		<Container>
			{/* {errorMessage && <ErrorBox error={errorMessage} />} */}
			<Form onSubmit={handleSubmit(handleLogin)}>
				{loginFormElements.map((element, index) => (
					<Input
						{...element}
						key={index}
						register={register}
						error={errors[element.name]}
					/>
				))}

				<div className="flex justify-between items-center">
					<div className="flex gap-1 items-center cursor-pointer">
						<input
							type="checkbox"
							id="remember"
							className="cursor-pointer"
							{...register("remember")}
						/>
						<label
							htmlFor="remember"
							className="text-sm font-medium cursor-pointer"
						>
							Remember me
						</label>
					</div>

					<Link href={"/forget-password"}>
						<a className="text-blue-500 hover:text-blue-700 active:text-blue-700">
							<p className="text-sm font-semibold">
								Forgot password?
							</p>
						</a>
					</Link>
				</div>

				<GenButton fullwidth>LOGIN</GenButton>

				{/*
					<AuthButton loading={loading} isLogin />
				
				{isLogin ? (
					<p>
						Don&#39;t have an account?{" "}
						<Link href={"/signup"}>
							<a className="text-blue-500 hover:text-blue-700 active:text-blue-700">
								<span className="text-sm font-semibold">
									Sign Up Instead
								</span>
							</a>
						</Link>
					</p>
				) : (
					<p>
						Already have an account?{" "}
						<Link href={"/login"}>
							<a className="text-blue-500 hover:text-blue-700 active:text-blue-700">
								<span className="text-sm font-semibold">
									Log in Instead
								</span>
							</a>
						</Link>
					</p>
				)}
			 */}
			</Form>
		</Container>
	);
};
