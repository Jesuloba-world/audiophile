import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 8px;
	padding-inline: 33px;
	padding-block: 32px;
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media ${devices.mobile} {
		padding-inline: 24px;
	}
`;

export const Heading = styled.h6``;

export const Items = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const Loader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Prices = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Price = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PriceId = styled.p`
	text-transform: uppercase;
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
`;

export const PriceNumber = styled.h6`
	color: ${({ theme }) => theme.black};
`;

export const Grand = styled(Prices)``;

export const GrandNumber = styled(PriceNumber)`
	color: ${({ theme }) => theme.sienna};
`;
