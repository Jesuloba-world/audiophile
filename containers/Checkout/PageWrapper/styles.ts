import styled from "styled-components";

export const Container = styled.div`
	background: ${({ theme }) => theme.cultured};
`;

export const Inner = styled.div`
	max-width: 1110px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 38px;
	padding-block: 80px 140px;
`;
