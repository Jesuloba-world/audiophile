import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.div<{ home?: boolean }>`
	max-width: 1110px;
	margin: 0 auto;
	height: 588px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-block: ${({ home }) => (home ? "200px" : "160px")};

	@media ${devices.desktop} {
		padding-inline: 40px;
	}

	@media ${devices.tablet} {
		margin-block: ${({ home }) => (home ? "96px" : "120px")};
		grid-template-columns: 1fr;
		grid-template-rows: 300px 1fr;
		height: 633px;
		gap: 63px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 32px;

	@media ${devices.tablet} {
		align-items: center;
	}
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.black};
	max-width: 445px;

	span {
		color: ${({ theme }) => theme.sienna};
	}

	@media ${devices.tablet} {
		text-align: center;
		max-width: 573px;
	}
`;

export const SubTitle = styled.p`
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: ${({ theme }) => theme.black};
	opacity: 0.5;
	max-width: 445px;

	@media ${devices.tablet} {
		text-align: center;
		max-width: 573px;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	.tablet {
		display: none;
	}

	@media ${devices.tablet} {
		grid-row: 1;

		.tablet {
			display: block;
		}

		.desktop {
			display: none;
		}
	}

	img {
		border-radius: 5px;
		object-fit: cover;
		overflow: hidden;

		@media ${devices.tablet} {
			border-radius: 8px;
		}
	}
`;
