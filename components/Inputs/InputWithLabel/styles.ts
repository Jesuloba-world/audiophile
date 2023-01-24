import styled from "styled-components";

export const Container = styled.div<{ span?: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 9px;

	${({ span }) => span && `grid-column: span 2`};
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Label = styled.label<{ isError: boolean }>`
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.2px;
	color: ${({ theme, isError }) => (!isError ? theme.black : theme.error)};
`;

export const Error = styled.p`
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.error};
`;

export const Input = styled.input<{ isError: boolean }>`
	/* background: ${({ theme }) => theme.white}; */
	border: solid
		${({ theme, isError }) =>
			!isError ? `1px ${theme.light_grey}` : `2px ${theme.error}`};
	border-radius: 8px;
	height: 56px;
	padding-inline: 24px;

	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: -0.25px;
	color: ${({ theme }) => theme.black};

	&::placeholder {
		mix-blend-mode: normal;
		opacity: 0.4;
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.sienna};
		outline: none;
	}
`;
