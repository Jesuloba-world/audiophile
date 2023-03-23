import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.div`
	height: 320px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	order: 3;

	@media ${devices.tablet} {
		gap: 10px;
	}

	@media ${devices.tablet500} {
		height: fit-content;
		grid-template-columns: 1fr;
		grid-template-rows: 200px minmax(200px, 1fr);
		gap: 24px;
	}
`;

export const ImageBox = styled.div`
	position: relative;
	border-radius: 8px;
	overflow: hidden;

	.tablet {
		display: none;
	}

	.mobile {
		display: none;
	}

	@media ${devices.tablet} {
		.tablet {
			display: block;
		}

		.desktop {
			display: none;
		}
	}

	@media ${devices.tablet500} {
		.tablet {
			display: none;
		}

		.mobile {
			display: block;
		}
	}
`;

export const TextBox = styled.div`
	border-radius: 8px;
	background-color: ${({ theme }) => theme.cultured};
	display: flex;
	align-items: center;
	padding-left: 95px;

	@media ${devices.tablet} {
		padding-left: 41px;
	}

	@media ${devices.tablet500} {
		padding: 24px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;
