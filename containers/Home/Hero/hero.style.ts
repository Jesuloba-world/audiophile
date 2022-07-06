import styled from "styled-components";

export const Container = styled.section<{ image: any }>`
	height: calc(100vh - 96px);
	background-color: ${({ theme }) => theme.smoky};
	background-image: url(${({ image }) => image});
	background-position: center;
	background-size: contain;
`;

export const Inner = styled.div`
	max-width: 1110px;
	height: 100%;
	margin: 0 auto;

	display: flex;
	align-items: center;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	a {
		margin-top: 16px;
	}
`;

export const Overline = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 10px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.white};
	opacity: 0.5;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.white};
	text-transform: uppercase;
	width: 398px;
`;

export const SubTitle = styled.p`
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: ${({ theme }) => theme.white};
	opacity: 0.75;
	width: 349px;
`;
