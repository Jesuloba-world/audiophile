import styled from "styled-components";
import { devices } from "styled.config";

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;

export const Form = styled.form`
	background: ${({ theme }) => theme.white};
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Heading = styled.h3`
	text-transform: capitalize;
	text-align: center;
	width: 384px;

	display: flex;
	flex-direction: column;
	gap: 8px;

	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.sienna};
	}

	@media ${devices.tablet500} {
		width: 100%;
	}
`;

export const Bottom = styled.div<{ stack?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${({ stack }) =>
		stack
			? `
		flex-direction: column;
		align-items: flex-start;
	`
			: null}
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
	cursor: pointer;

	input,
	p {
		cursor: pointer;
	}

	p {
		font-size: 14px;
	}
`;

export const ForgetText = styled.p`
	font-weight: 600;
	&:hover {
		color: ${({ theme }) => theme.grey};
	}
`;

export const SwitchButton = styled.button`
	border-bottom: 1px solid ${({ theme }) => theme.black};
	padding-inline: 8px;

	&:hover {
		color: ${({ theme }) => theme.grey};
		border-bottom: 1px solid ${({ theme }) => theme.grey};
	}
`;

export const SvgContainer = styled.button`
	position: absolute;
	top: 0;
	right: 0px;
	padding-right: 6px;
	padding-top: 6px;

	height: 40px;
	width: 40px;
	cursor: pointer;

	svg {
		height: 100%;
		width: 100%;
	}

	&:hover svg {
		fill: ${({ theme }) => theme.sienna};
	}
`;

export const ErrorText = styled.p`
	color: #ef4444;
	font-size: 12px;
	line-height: 16px;
`;
