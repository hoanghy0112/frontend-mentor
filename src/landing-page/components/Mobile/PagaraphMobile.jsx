import styled from "styled-components";

const StyledParagraph = styled.div`
	font-family: "Ubuntu", sans-serif;
	font-size: 1rem;

	display: grid;
	gap: 10px;

	h3 {
      font-family: "Overpass", sans-serif;
		font-size: 1.5rem;
		font-weight: 600;
		padding: 0 30px;
	}

	.paragraph-content {
      padding: 10px;
      color: var(--very-dark-grayish-blue);
		font-weight: 300;
		line-height: 1.7rem;
	}
`;

export default function Paragraph({ title, children }) {
	return (
		<StyledParagraph>
			<h3>{title}</h3>
			<div className="paragraph-content">{children}</div>
		</StyledParagraph>
	);
}
