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
	padding: 31px 31px 31px 33px;

	position: absolute;
	top: 97px;
	right: 0;

	z-index: 4;
`;
