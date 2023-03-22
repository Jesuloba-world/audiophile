import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section`
	max-width: 1110px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 48px;

	@media ${devices.desktop} {
		padding-inline: 40px;
	}

	@media ${devices.tablet} {
		gap: 32px;
	}
`;
