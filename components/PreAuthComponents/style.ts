import styled from "styled-components";

export const PreAuthContainer = styled.div`
	text-align: center;
	margin-block: 64px;

	h4 {
		color: ${({ theme }) => theme.error};
	}
`;
