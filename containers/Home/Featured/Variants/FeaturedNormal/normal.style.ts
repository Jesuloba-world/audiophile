import styled from "styled-components";

export const Container = styled.div`
	height: 320px;
	border-radius: 8px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.cultured};
	position: relative;
	order: 2;
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
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;
