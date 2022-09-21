import styled from "styled-components";

export const OverLord = styled.div`
	position: relative;
`;

export const Container = styled.button`
	color: ${({ theme }) => theme.white};
	font-size: 23px;

	&:hover {
		color: ${({ theme }) => theme.sienna};
	}
`;

export const ModalContainer = styled.div`
	width: 377px;
	background-color: ${({ theme }) => theme.white};
	min-height: 30px;
	border-radius: 8px;
	color: ${({ theme }) => theme.black};

	position: absolute;
	top: 97px;
	right: 0;

	z-index: 4;
`;

export const BackDrop = styled.div<{ containerHeight: number }>`
	position: fixed;
	bottom: 0;
	left: 0;
	/* height: calc(100% - ${({ containerHeight }) =>
		`${containerHeight}px`}); */
	height: 100vh;
	width: 100vw;
	background: #000000;
	mix-blend-mode: normal;
	opacity: 0.4;
	z-index: 2;
`;
