import styled, { css } from "styled-components";

const Button = styled.button`
	cursor: pointer;

	width: fit-content;
	padding: 15px ${({ width }) => width ? '0;' : '25px;'};
	/* ${({ width }) => width ? `padding: 15px auto` : `padding: 15px 25px`} */
	margin: auto;

	background-color: transparent;

	border: none;
	border-radius: 9999px;

	color: var(--very-dark-grayish-blue);
	font-family: "Ubuntu";
	font-weight: 700;
	font-size: 0.9rem;

	transition: 0.3s;

	${({ width }) => width && `width: ${width}px`}
`;

export const NonBorderButton = styled(Button)``;

export const ColorfulButton = styled(Button)`
	background: linear-gradient(120deg, var(--very-light-red), var(--light-red));

	color: white;
`;

export const LightRedButton = styled(Button)`
	background-color: #fff;
	color: var(--very-light-red);

	&:hover {
		color: white;
		background-color: var(--very-light-red);
	}
`;

export const PrimaryButton = styled(Button)`
	border: 1px solid white;
	color: white;
	background-color: transparent;

	&:hover {
		background-color: #fff;
		color: var(--very-light-red);
	}
`;
