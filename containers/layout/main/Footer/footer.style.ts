import styled from "styled-components";

export const Container = styled.footer`
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.black};
`;

export const Inner = styled.div`
	padding-block: 75px 48px;
	max-width: 1110px;
	margin: 0 auto;
	position: relative;
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

export const Socials = styled.div`
	align-items: flex-end;
	justify-content: flex-end;
	display: flex;
	gap: 16px;
`;

export const Copyright = styled(Note)`
	font-weight: 700;
`;

export const Yellow = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.sienna};
	height: 4px;
	width: 101px;
`;
