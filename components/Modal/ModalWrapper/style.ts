import styled from "styled-components";

export const Container = styled.div`
	background: ${({ theme }) => theme.white};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 15;

	width: 540px;
	min-height: 100px;
	border-radius: 8px;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);
	overflow: hidden;

	padding: 48px;
`;
