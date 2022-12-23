import styled from "styled-components";

export const Container = styled.div`
	height: 64px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TextAndImage = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;

	img {
		height: auto;
		width: auto;
		border-radius: 8px;
	}
`;

export const Text = styled.div``;

export const Name = styled.p`
	font-weight: 700;
	color: ${({ theme }) => theme.black};
`;

export const Price = styled.p`
	font-weight: 700;
	font-size: 14px;
	color: #000000;
	mix-blend-mode: normal;
	opacity: 0.5;
`;

export const ControllerContainer = styled.div`
	width: 96px;
`;
