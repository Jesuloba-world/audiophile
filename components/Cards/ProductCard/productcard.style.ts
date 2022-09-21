import styled from "styled-components";

export const Container = styled.div<{ reverse: boolean }>`
	height: 560px;
	width: 100%;

	display: grid;
	grid-template-columns: 1fr 1fr;

	${({ reverse }) =>
		!reverse
			? `grid-template-areas: "image text"`
			: `grid-template-areas: "text image"`};
`;

export const ImageContainer = styled.div<{ reverse: boolean }>`
	height: 100%;
	width: 100%;

	grid-area: image;

	display: flex;

	${({ reverse }) => reverse && `justify-content: end`};
`;

export const GridFrame = styled.div<{ reverse: boolean }>`
	display: flex;
	justify-content: ${({ reverse }) => (reverse ? `start` : `end`)};

	grid-area: text;
`;

export const TextContainer = styled.div`
	max-width: 445px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Name = styled.h2`
	color: ${({ theme }) => theme.black};
	margin-bottom: 32px;
`;

export const Description = styled.p`
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
	margin-bottom: 40px;
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
`;
