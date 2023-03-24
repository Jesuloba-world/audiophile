import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section`
	display: flex;
	gap: 30px;
	justify-content: space-between;
	align-items: center;

	@media ${devices.tablet600} {
		flex-direction: column;
		gap: 32px;
	}
`;

export const ImageContainer = styled.div`
	height: 560px;
	width: 540px;
	position: relative;
	border-radius: 8px;
	overflow: hidden;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.tablet {
		display: none;
	}

	.mobile {
		display: none;
	}

	@media ${devices.tablet} {
		max-width: 280px;

		.tablet {
			display: block;
		}

		.desktop {
			display: none;
		}
	}

	@media ${devices.tablet600} {
		max-width: 100%;
		height: 480px;

		.tablet {
			display: none;
		}

		.mobile {
			display: block;
		}
	}
`;

export const TextContainer = styled.div`
	width: 100%;
	max-width: 445.5px;

	@media ${devices.tablet} {
		max-width: 340px;
	}

	@media ${devices.tablet600} {
		max-width: 100%;
	}
`;

export const Name = styled.h2`
	color: ${({ theme }) => theme.black};
	margin-bottom: 32px;

	@media ${devices.tablet600} {
		margin-bottom: 24px;
	}
`;

export const Description = styled.p`
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
	margin-bottom: 32px;

	@media ${devices.tablet600} {
		margin-bottom: 24px;
	}
`;

export const Overline = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 10px;
	text-transform: uppercase;

	color: ${({ theme }) => theme.sienna};
	margin-bottom: 16px;

	@media ${devices.tablet600} {
		margin-bottom: 24px;
	}
`;

export const Price = styled.h6``;

export const ButtonContainer = styled.div`
	margin-top: 48px;
	display: flex;
	gap: 16px;

	@media ${devices.tablet600} {
		margin-top: 32px;
	}
`;
