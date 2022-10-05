import { Form, Bottom, ErrorText } from "../styles";
import { signupFormElements } from "../constant";
import { AuthInput, GenButton } from "components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema";

export const RegisterForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(signUpSchema),
	});

	const handleLogin = (data: any) => {
		console.log(data);
	};

	return (
		<Form onSubmit={handleSubmit(handleLogin)}>
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
