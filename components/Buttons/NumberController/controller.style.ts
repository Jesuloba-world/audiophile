import styled from "styled-components";

export const Container = styled.div`
	height: 48px;
	background: #f1f1f1;
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

	color: #000000;

	mix-blend-mode: normal;
	opacity: 0.25;

	height: 18px;
	width: 16px;

	&:hover {
		color: #d87d4a;
	}
`;

export const Number = styled.span`
	font-family: "Manrope";
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: #000000;
`;
