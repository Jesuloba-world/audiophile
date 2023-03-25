import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const CartItemContainer = styled.div`
	padding-bottom: 24px;
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		color: ${({ theme }) => theme.black};
		mix-blend-mode: normal;
		opacity: 0.5;
	}
`;

export const RemoveAll = styled.button`
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	text-decoration-line: underline;
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
	cursor: pointer;
`;

export const UserCartContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const TotalPrice = styled.h6``;
