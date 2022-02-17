import styled from "styled-components";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import { useState } from "react";
import NavDropDown from "./NavDropDown";

const StyledNavBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;;

	position: relative;

	margin-bottom: 20px;

	.logo {
		cursor: pointer;
		height: 30px;
	}

	.expand {
		cursor: pointer;
		width: 30px;
		height: 30px;
		object-fit: contain;
	}
`;

export default function NavBarMobile() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledNavBar>
			<img className="logo" src={logo} alt="Blogr logo" />
			{isOpen ? (
				<img
					onClick={() => setIsOpen((prev) => !prev)}
					className="expand"
					src={close}
					alt="Close icon"
				/>
			) : (
				<img
					onClick={() => setIsOpen((prev) => !prev)}
					className="expand"
					src={hamburger}
					alt="Expand navbar"
				/>
			)}
			<NavDropDown isOpen={isOpen}></NavDropDown>
		</StyledNavBar>
	);
}
