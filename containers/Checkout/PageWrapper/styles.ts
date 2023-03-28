import styled from "styled-components";
import { devices } from "styled.config";

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

	@media ${devices.desktop} {
		padding-inline: 40px;
	}

	@media ${devices.tablet} {
		padding-block: 48px 116px;
		gap: 24px;
	}

	@media ${devices.tablet500} {
		padding-inline: 24px;
	}

	@media ${devices.mobile} {
		padding-block: 16px 97px;
	}
`;
