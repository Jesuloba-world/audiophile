import styled from "styled-components";

export const Container = styled.div`
	height: 320px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
`;

export const ImageBox = styled.div`
	border-radius: 8px;
	overflow: hidden;
`;

export const TextBox = styled.div`
	border-radius: 8px;
	background-color: ${({ theme }) => theme.cultured};
	display: flex;
	align-items: center;
	padding-left: 95px;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;
