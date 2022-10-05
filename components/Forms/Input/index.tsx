import { FC } from "react";

interface props {
	label: string;
	type: string;
	name: string;
	id: string;
	register: any;
	error: any;
}

export const Input: FC<props> = ({
	label,
	id,
	register,
	error,
	name,
	...restProps
}) => {
	return (
		<div className="flex flex-col gap-1">
			<label className="text-sm font-medium" htmlFor={id}>
				{label}
			</label>
			<input
				className="border border-gray-500/40 border-solid rounded shadow h-8 text-sm px-2"
				id={id}
				{...restProps}
				{...register(name)}
			/>
			{/* Error */}
			{error && <p className="text-red-500 text-xs">{error.message}</p>}
		</div>
	);
};
