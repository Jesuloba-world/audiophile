import styled from "styled-components";

export const Container = styled.div<{ span?: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 9px;

	${({ span }) => span && `grid-column: span 2`};
`;

export const Label = styled.label`
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.2px;
	color: #000000;
`;

export const Input = styled.input`
	background: ${({ theme }) => theme.white};
	border: 1px solid #cfcfcf;
	border-radius: 8px;
	height: 56px;
	padding-inline: 24px;

	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: -0.25px;
	color: #000000;

	&::placeholder {
		mix-blend-mode: normal;
		opacity: 0.4;
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.sienna};
		outline: none;
	}
`;
