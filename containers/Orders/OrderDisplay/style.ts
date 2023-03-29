import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.div`
	background: ${({ theme }) => theme.white};
	padding: 54px 48px 48px 48px;
	border-radius: 8px;
	width: 100%;

	@media ${devices.tablet} {
		padding: 30px 27px;
	}

	@media ${devices.mobile} {
		padding: 24px 24px 30px 24px;
	}
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

export const Message = styled.h6`
	color: ${({ theme }) => theme.error};
`;
