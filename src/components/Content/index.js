/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const containerStyles = css`
  grid-column: 2/3;
  grid-row: 2/3;

  @media (max-width: 1000px) {
    grid-column: 1/3;
  }
`;


function Content() {
  return <main css={containerStyles}>Content</main>;
}

export default Content;
