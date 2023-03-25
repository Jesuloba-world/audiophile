import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 64px;

	@media ${devices.tablet} {
		gap: 56px;
	}

	@media ${devices.tablet600} {
		gap: 40px;
	}

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

	@media ${devices.tablet600} {
		.tablet {
			display: none;
		}

		.mobile {
			display: block;
		}
	}
`;

export const Title = styled.h3`
	display: block;
	text-align: center;
`;

export const ItemsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 30px;

	@media ${devices.tablet} {
		gap: 10px;
	}

	@media ${devices.tablet600} {
		flex-direction: column;
		gap: 56px;
	}
`;

export const Recommendation = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media ${devices.tablet600} {
		width: 100%;
		gap: 32px;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 318px;
	max-width: 100%;

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	@media ${devices.tablet600} {
		height: 120px;
		background-color: ${({ theme }) => theme.cultured};
		border-radius: 8px;

		img {
			object-fit: contain;
		}
	}
`;

export const TextAndButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
`;

export const Text = styled.h5``;
