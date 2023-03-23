import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.div`
	height: 320px;
	border-radius: 8px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.cultured};
	position: relative;
	order: 2;

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

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	padding-inline: 95px;
	display: flex;
	align-items: center;

	@media ${devices.tablet} {
		padding-inline: 62px;
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
