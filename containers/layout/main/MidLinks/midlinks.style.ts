import styled from "styled-components";
import { devices } from "styled.config";

export const MiddleLinks = styled.div`
	display: flex;
	gap: 34px;

	@media ${devices.tablet} {
		display: none;
	}
`;
