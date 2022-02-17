import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import arrowIcon from "../../images/icon-arrow-dark.svg";

const DropDown = styled.div`
	/* border: ${({ isOpen }) => (isOpen ? "1px" : "0px")} solid black; */
	/* border: 1px solid var(--very-dark-blue); */
	/* box-shadow: 0 0 10px 0px ${({ isOpen }) => (isOpen ? "#000" : "#fff")}; */
`;

const NavItemTitle = styled.p`
	cursor: pointer;
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	padding: 10px;
	font-size: 1.2rem;

   img {
      transition: 0.5s;
   }
`;

var NavItemChildren = styled.div`
	transition: 0.5s;
	display: grid;
	overflow: hidden;
	transition: 0.5s;
	background-color: var(--gray);
	border-radius: 4px;

	font-size: 1.1rem;
	color: var(--light-grayish-blue);

	div {
		display: grid;
		padding: 30px;
		gap: 20px !important;
		justify-content: center;
	}
`;

export default function NavItemDropDown({ name, children }) {
	const [isOpen, setIsOpen] = useState(false);

   const titleEle = useRef(null)
	const childrenEle = useRef(null);
	const arrowEle = useRef(null);

	const height = useRef(null);
   const angle = useRef(isOpen ? 180 : 0);

	useEffect(() => {
		if (childrenEle.current) {
			height.current =
				childrenEle.current.getBoundingClientRect().height ||
				height.current;

			if (isOpen) {
				childrenEle.current.style.maxHeight = `${height.current}px`;
				titleEle.current.style.color = `var(--light-grayish-blue)`;
            arrowEle.current.style.transform = `rotate(${angle.current}deg)`;
            angle.current += 180
			} else {
				childrenEle.current.style.maxHeight = 0;
				titleEle.current.style.color = `var(--very-dark-blue)`;
            arrowEle.current.style.transform = `rotate(${angle.current}deg)`;
            angle.current += 180
			}
		}
	}, [isOpen]);

	return (
		<DropDown isOpen={isOpen}>
			<NavItemTitle ref={titleEle} onClick={() => setIsOpen((prev) => !prev)}>
				{name}
				<img ref={arrowEle} src={arrowIcon} alt="arrow icon" />
			</NavItemTitle>
			<NavItemChildren ref={childrenEle} isOpen={isOpen}>
				<div>{children}</div>
			</NavItemChildren>
		</DropDown>
	);
}
