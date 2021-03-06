import styled from "styled-components";

export const Container = styled.div`
	height: 560px;
	background-color: ${({ theme }) => theme.sienna};
	border-radius: 8px;
	position: relative;
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	padding-inline: 95px;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 350px;
	margin-left: auto;

	a {
		margin-top: 16px;
	}
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.white};
`;

export const SubTitle = styled.p`
	color: ${({ theme }) => theme.white};
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	opacity: 0.75;
`;
