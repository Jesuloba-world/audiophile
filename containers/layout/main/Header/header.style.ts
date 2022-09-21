import styled from "styled-components";

export const Container = styled.header<{
	home?: boolean;
	ref: any;
}>`
	background-color: ${({ theme, home }) =>
		home ? theme.smoky : theme.black};
	height: 96px;
	position: relative;
	z-index: 10;
`;

export const Inner = styled.div`
	max-width: 1110px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	&::after {
		display: block;
		content: "";
		height: 1px;
		width: 100%;
		background: ${({ theme }) => theme.white};
		opacity: 0.2;
		position: absolute;
		bottom: 0;
	}
`;

export const IconLinks = styled.div`
	display: flex;
	gap: 34px;
	align-items: center;
`;
