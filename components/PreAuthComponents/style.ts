import styled from "styled-components";

export const PreAuthContainer = styled.div`
	text-align: center;
	padding-block: 24px;
	align-self: center;

	h4 {
		color: ${({ theme }) => theme.error};
	}
`;
