import styled from "styled-components";

export const Container = styled.button`
	height: 48px;
	width: 160px;
	background: #d87d4a;
	text-transform: uppercase;

	font-family: "Manrope";
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 1px;

	color: #ffffff;

	&:hover {
		background: #fbaf85;
	}

	&:focus {
		outline: none;
	}
`;
