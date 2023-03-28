import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.form`
	width: 100%;
	gap: 30px;
	display: grid;
	grid-template-columns: 1fr minmax(250px, 0.48fr);

	align-items: start;

	@media ${devices.desktop} {
		gap: 20px;
	}

	@media ${devices.tablet} {
		grid-template-columns: 1fr;
		gap: 32px;
	}
`;
