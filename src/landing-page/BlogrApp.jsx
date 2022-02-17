import styled from "styled-components";
import useViewPort from "../hooks/useViewPort";
import NavBarMobile from "./components/Mobile/NavBarMobile";
import NavDropDown from "./components/Mobile/NavDropDown";
import Page from "./components/Mobile/Page";

const StyledBlogrApp = styled.div`
	--light-red: hsl(356, 100%, 66%); // CTA text
	--very-light-red: hsl(355, 100%, 74%); // CTA hover background
	--very-dark-blue: hsl(208, 49%, 24%); // headings
   --gray: #f3f3f3;
	--grayish-blue: #dfdfe0; // footer text
	--light-grayish-blue: #808080; 
	--very-dark-grayish-blue: hsl(207, 13%, 34%); // body copy
	--very-dark-black-blue: hsl(240, 10%, 16%); // footer background

	// Background gradient - Intro/CTA mobile nav:
	--very-light-red: hsl(13, 100%, 72%);
	--light-red: hsl(353, 100%, 62%);

	// background gradient body
	--very-dark-gray-blue: hsl(237, 17%, 21%);
	--very-dark-saturated-blue: hsl(237, 23%, 32%);

   min-height: 100vh;
   /* background-color: var(--very-light-red); */
   /* padding: 30px; */

	font-family: 'Ubuntu', sans-serif;
   font-size: 16px;
`;

const StyledMobile = styled.div`
`;

const StyledDesktop = styled.div``;

function BlogrApp() {
	const viewport = useViewPort();

	const isMobile = viewport < 375;

   const StyledApp = isMobile ? StyledMobile : StyledDesktop

	return (
		<StyledBlogrApp>
         <StyledApp>
				<Page></Page>
         </StyledApp>
		</StyledBlogrApp>
	);
}

export default BlogrApp;
