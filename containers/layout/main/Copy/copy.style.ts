import styled from "styled-components";

export const Container = styled.div<{ home?: boolean }>`
	max-width: 1110px;
	margin: 0 auto;
	height: 588px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-block: ${({ home }) => (home ? "200px" : "160px")};
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 32px;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.black};
	width: 445px;

	span {
		color: ${({ theme }) => theme.sienna};
	}
`;

export const SubTitle = styled.p`
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: ${({ theme }) => theme.black};
	opacity: 0.5;
	width: 445px;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	img {
		border-radius: 5px;
		object-fit: contain;
	}
`;
