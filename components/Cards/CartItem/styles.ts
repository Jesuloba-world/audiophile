import styled from "styled-components";

export const Container = styled.div`
	height: 64px;

	display: flex;
	gap: 16px;
	align-items: center;
`;

export const ImageContainer = styled.div`
	img {
		height: auto;
		width: auto;
		border-radius: 8px;
		max-width: fit-content;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const Text = styled.div``;

export const Name = styled.p`
	font-weight: 700;
	color: ${({ theme }) => theme.black};
`;

export const Price = styled.p`
	font-weight: 700;
	font-size: 14px;
	color: ${({ theme }) => theme.black};
	mix-blend-mode: normal;
	opacity: 0.5;
`;

export const ControllerContainer = styled.div`
	width: 96px;
`;

export const Quantity = styled(Price)`
	font-size: 15px;
	align-self: flex-start;
`;
