import styled from "styled-components";

export const Container = styled.div`
	/* height: 140px; */
	display: grid;
	grid-template-columns: 1.24fr 1fr;

	border-radius: 8px;
	overflow: hidden;

	transition: all 0.2s;
`;

export const Items = styled.div`
	background: ${({ theme }) => theme.cultured};
	color: ${({ theme }) => theme.black};

	padding: 24px;

	display: flex;
	flex-direction: column;
	gap: 12px;
	align-items: center;
`;

export const Grand = styled.div`
	background: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};

	padding: 41px 33px;

	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	gap: 8px;

	p {
		mix-blend-mode: normal;
		opacity: 0.5;
		text-transform: uppercase;
	}
`;

export const ItemContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Divider = styled.div`
	background: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.08;
	width: 100%;
	height: 1px;
`;

export const Others = styled.button`
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.214286px;
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
	padding-inline: 8px;

	&:hover {
		color: ${({ theme }) => theme.sienna};
	}
`;

export const Item = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
	align-items: flex-start;
`;

export const NamePrice = styled.div``;

export const Name = styled.p`
	font-weight: 700;
	text-transform: uppercase;
	color: ${({ theme }) => theme.black};
`;

export const Price = styled(Name)`
	mix-blend-mode: normal;
	opacity: 0.5;
	font-size: 14px;
`;

export const Quantity = styled.p`
	font-weight: 700;
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
	margin-left: auto;
`;
