import styled from "styled-components";

export const Container = styled.header`
	background-color: ${({ theme }) => theme.black};
	height: 96px;
`;

export const Inner = styled.div`
	max-width: 1110px;
	height: 100%;
	margin: 0 auto;
	border-bottom: 1px solid ${({ theme }) => theme.white};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const MiddleLinks = styled.div`
	display: flex;
	gap: 34px;
`;

export const IconLinks = styled(MiddleLinks)``;
