import styled from "styled-components";

export const BackDrop = styled.div<{
	highz: boolean;
}>`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: #000000;
	mix-blend-mode: normal;
	opacity: 0.4;
	z-index: ${({ highz }) => (highz ? 12 : 2)};
`;
