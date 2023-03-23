import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section`
	padding-top: 160px;
	max-width: 1110px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 160px;

	@media ${devices.desktop} {
		padding-inline: 40px;
	}

	@media ${devices.tablet} {
		gap: 120px;
		padding-top: 120px;
	}

	@media ${devices.tablet500} {
		padding-inline: 24px;
		padding-top: 63px;
	}
`;
