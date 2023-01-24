import styled from "styled-components";

export const Container = styled.label`
	height: 56px;
	border: 1px solid ${({ theme }) => theme.light_grey};
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding-inline: 16px;
	gap: 16px;

	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: -0.25px;
	color: ${({ theme }) => theme.black};
	transition: 120ms transform ease-in-out;

	&:focus-within {
		border: 1px solid ${({ theme }) => theme.sienna};
	}

	&:hover {
		border: 1px solid ${({ theme }) => theme.sienna};
	}

	input {
		appearance: none;
		background-color: #fff;
		margin: 0;
		font: inherit;
		color: ${({ theme }) => theme.light_grey};
		width: 20px;
		height: 20px;
		border: 1px solid currentColor;
		border-radius: 50%;

		display: grid;
		place-content: center;

		&::before {
			content: "";
			width: 10px;
			height: 10px;
			border-radius: 50%;
			transform: scale(0);
			transition: 120ms transform ease-in-out;
			box-shadow: inset 1em 1em ${({ theme }) => theme.sienna};
			background-color: CanvasText;
		}

		&:checked::before {
			transform: scale(1);
		}
	}
`;
