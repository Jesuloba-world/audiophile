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
`;
