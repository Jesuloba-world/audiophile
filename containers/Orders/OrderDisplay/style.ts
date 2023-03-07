import styled from "styled-components";

export const Container = styled.div`
	background: ${({ theme }) => theme.white};
	padding: 54px 48px 48px 48px;
	border-radius: 8px;
	width: 100%;
`;

export const Heading = styled.h3`
	padding-bottom: 40px;
`;

export const Loader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const OrderContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
