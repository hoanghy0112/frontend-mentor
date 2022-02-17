import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ColorfulButton, NonBorderButton } from "../General/Button";
import NavItemDropDown from "./NavItemDropDown";

const StyledNavDropDown = styled.div`
	z-index: 5; 

	position: absolute;
	top: 50px;

	transition: 0.5s;
   transition-timing-function: ease-in-out;

	overflow: hidden;

	width: 100%;

	padding: ${({ isOpen }) => (isOpen ? "25px" : "0px 25px")};
	border-radius: 4px;

	background-color: white;

	font-family: "Ubuntu";
	color: var(--very-dark-saturated-blue);
	font-weight: 500;
	text-align: center;

	box-shadow: 0 0 20px 0px #00000047;

	div {
		display: grid;
		text-align: center;

		gap: 5px;
	}

	hr {
		margin: 10px 0;
		border: none;
		height: 1px;
		background-color: var(--grayish-blue);
	}
`;

export default function NavDropDown({ isOpen }) {
	const ele = useRef(null);
	const divEle = useRef(null);
	const height = useRef(null);

	useEffect(() => {
		if (ele.current) {
			if (isOpen) {
				// height.current =
				// 	divEle.current.getBoundingClientRect().height || height.current;
				ele.current.style.maxHeight = `${1000}px`;
			} else {
				ele.current.style.maxHeight = `${0}px`;
			}
		}
	}, [isOpen]);

	return (
		<StyledNavDropDown isOpen={isOpen} ref={ele}>
			<div ref={divEle}>
				<NavItemDropDown name="Product">
					<p>Overview</p>
					<p>Pricing</p>
					<p>Marketplace</p>
					<p>Features</p>
					<p>Integrations</p>
				</NavItemDropDown>
				<NavItemDropDown name="Company">
					<p>About</p>
					<p>Team</p>
					<p>Blog</p>
					<p>Careers</p>
				</NavItemDropDown>
				<NavItemDropDown name="Connect">
					<p>Contact</p>
					<p>Newsletter</p>
					<p>LinkedIn</p>
				</NavItemDropDown>
				<NavItemDropDown name="Developer">
					<p>API</p>
					<p>Documentation</p>
					<p>Tutorial</p>
				</NavItemDropDown>
				<hr />
				<NonBorderButton>Login</NonBorderButton>
				<ColorfulButton>Sign Up</ColorfulButton>
			</div>
		</StyledNavDropDown>
	);
}
