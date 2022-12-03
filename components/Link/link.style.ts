import styled from "styled-components";

export const Container = styled.p`
	color: ${({ theme }) => theme.white};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 13px;
	line-height: 25px;
	letter-spacing: 2px;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.sienna};
	}
`;
