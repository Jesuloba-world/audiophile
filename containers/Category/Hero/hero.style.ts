import styled from "styled-components";

export const Container = styled.section`
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	height: 240px;
	display: grid;
	place-items: center;
`;

export const Title = styled.h2``;
