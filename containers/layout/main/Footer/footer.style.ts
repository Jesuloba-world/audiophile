import styled from "styled-components";

export const Container = styled.footer`
	padding-block: 75px 48px;
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.black};
`;

export const Inner = styled.div`
	max-width: 1110px;
	margin: 0 auto;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Middle = styled.div`
	margin-block: 36px 56px;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const Note = styled.p`
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	mix-blend-mode: normal;
	opacity: 0.5;
	width: 540px;
`;
