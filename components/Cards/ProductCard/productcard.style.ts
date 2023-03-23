import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.div<{ reverse: boolean }>`
	height: 560px;
	width: 100%;

	display: grid;
	grid-template-columns: 1fr 1fr;

	grid-template-areas: ${({ reverse }) =>
		!reverse ? `"image text"` : `"text image"`};

	@media ${devices.tablet} {
		grid-template-columns: 1fr;
		grid-template-rows: 352px fit-content;
		grid-template-areas: "image" "text";
		height: fit-content;
		row-gap: 52px;
		height: auto;
	}

	@media ${devices.tablet500} {
	}
`;

export const ImageContainer = styled.div<{ reverse: boolean }>`
	height: 100%;
	width: 100%;
	grid-area: image;
	display: flex;
	justify-content: ${({ reverse }) => reverse && `end`};
	position: relative;

	img {
		height: auto;
		width: auto;
	}

	@media ${devices.tablet} {
		justify-content: center;
		height: 352px;
		background-color: ${({ theme }) => theme.cultured};
		border-radius: 8px;
		overflow: hidden;
	}
`;

export const GridFrame = styled.div<{ reverse: boolean }>`
	display: flex;
	justify-content: ${({ reverse }) => (reverse ? `start` : `end`)};

	grid-area: text;

	@media ${devices.tablet} {
		justify-content: center;
	}
`;

export const TextContainer = styled.div`
	max-width: 445px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${devices.tablet} {
		max-width: 572px;
		align-items: center;
	}
`;

export const Name = styled.h2`
	color: ${({ theme }) => theme.black};
	margin-bottom: 32px;

	@media ${devices.tablet} {
		text-align: center;
	}

	@media ${devices.tablet500} {
		margin-bottom: 24px;
	}
`;

export const Description = styled.p`
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
	margin-bottom: 40px;

	@media ${devices.tablet} {
		text-align: center;
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

	@media ${devices.tablet500} {
		margin-bottom: 24px;
	}
`;
