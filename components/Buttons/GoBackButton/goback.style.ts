import styled from "styled-components";

export const Container = styled.button`
	cursor: pointer;
	text-transform: capitalize;
	font-family: "Manrope";
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;

	color: #000000;

	mix-blend-mode: normal;
	opacity: 0.5;

	&:hover,
	&:active {
		color: #d87d4a;
	}
`;
