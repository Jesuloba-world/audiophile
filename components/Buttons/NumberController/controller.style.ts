import styled from "styled-components";

export const Container = styled.div`
	height: 48px;
	background: ${({ theme }) => theme.cultured};
	display: flex;
	align-items: center;
	gap: 20px;
	padding-inline: 15.5px;
`;

export const ControlButton = styled.button`
	font-family: "Manrope";
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: ${({ theme }) => theme.black};

	mix-blend-mode: normal;
	opacity: 0.25;

	height: 18px;
	width: 16px;

	&:hover {
		color: ${({ theme }) => theme.sienna};
	}
`;

export const Number = styled.span`
	font-family: "Manrope";
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: ${({ theme }) => theme.black};
`;
