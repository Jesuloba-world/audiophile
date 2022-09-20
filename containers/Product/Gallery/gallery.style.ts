import styled from "styled-components";

export const Container = styled.section`
	margin-top: 160px;
	height: 592px;
	display: grid;
	grid-template-columns: 41.2% calc(100% - 41.2%);
	grid-template-rows: 1fr 1fr;
	gap: 30px;
`;

const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	border-radius: 8px;
	overflow: hidden;
`;

export const First = styled(ImageContainer)``;

export const Second = styled(ImageContainer)``;

export const Third = styled(ImageContainer)`
	grid-column: 2;
	grid-row: 1 / span 2;
`;
