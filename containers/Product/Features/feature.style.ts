import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	gap: 20px;

	@media ${devices.tablet} {
		flex-direction: column;
		gap: 88px;
	}
`;

export const Features = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	max-width: 635px;

	@media ${devices.desktop} {
		flex: 2;
	}

	@media ${devices.tablet} {
		max-width: 100%;
		flex: 1;
	}

	@media ${devices.tablet500} {
		gap: 24px;
	}
`;

export const InTheBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 350px;

	@media ${devices.desktop} {
		flex: 1;
	}

	@media ${devices.tablet} {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media ${devices.tablet500} {
		gap: 24px;
		grid-template-columns: 1fr;
	}
`;

export const Title = styled.h3``;

export const Text = styled.p`
	white-space: pre-line;
	mix-blend-mode: normal;
	opacity: 0.5;
`;

export const IncludedContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Included = styled.div`
	display: flex;
	gap: 20px;
`;

export const Quantity = styled.p`
	font-weight: 700;
	color: ${({ theme }) => theme.sienna};
`;
