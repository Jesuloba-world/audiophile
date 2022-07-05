import styled from "styled-components";

export const Container = styled.a`
	color: ${({ theme }) => theme.white};
	cursor: pointer;

	svg {
		&:hover {
			color: ${({ theme }) => theme.sienna};
		}
	}
`;
