import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section`
	height: 592px;
	display: grid;
	grid-template-columns: 1fr 1.42fr;
	grid-template-rows: 1fr 1fr;
	gap: 30px;

	.tablet {
		display: none;
	}

	.mobile {
		display: none;
	}

	@media ${devices.tablet} {
		height: 368px;
		row-gap: 20px;
		column-gap: 18px;

		.tablet {
			display: block;
		}

		.desktop {
			display: none;
		}
	}

	@media ${devices.tablet500} {
		height: 756px;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 2.1fr;
		gap: 20px;

		.tablet {
			display: none;
		}

		.mobile {
			display: block;
		}
	}
`;

const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	border-radius: 8px;
	overflow: hidden;

	img {
		object-fit: cover;
	}
`;

export const First = styled(ImageContainer)``;

export const Second = styled(ImageContainer)``;

export const Third = styled(ImageContainer)`
	grid-column: 2;
	grid-row: 1 / span 2;

	@media ${devices.tablet500} {
		grid-column: auto;
		grid-row: auto;
	}
`;
