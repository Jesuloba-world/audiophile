import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.main`
	max-width: 1110px;
	margin-inline: auto;
	padding-top: 79px;

	@media ${devices.desktop} {
		padding-inline: 40px;
	}

	@media ${devices.tablet} {
		padding-top: 32px;
	}

	@media ${devices.tablet500} {
		padding-inline: 24px;
	}
`;

export const Layout = styled.div`
	margin-top: 56px;
	display: flex;
	flex-direction: column;
	gap: 160px;

	@media ${devices.tablet} {
		margin-top: 24px;
		gap: 120px;
	}
`;
