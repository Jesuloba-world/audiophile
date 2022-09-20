import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	gap: 30px;
	justify-content: space-between;
	align-items: center;
`;

export const TextContainer = styled.div`
	width: 100%;
	max-width: 445.5px;
`;

export const Name = styled.h2`
	color: #000000;
	margin-bottom: 32px;
`;

export const Description = styled.p`
	color: #000000;
	mix-blend-mode: normal;
	opacity: 0.5;
	margin-bottom: 32px;
`;

export const Overline = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 10px;
	text-transform: uppercase;

	color: #d87d4a;
	margin-bottom: 16px;
`;

export const Price = styled.h6``;

export const ButtonContainer = styled.div`
	margin-top: 47px;
	display: flex;
	gap: 16px;
`;
