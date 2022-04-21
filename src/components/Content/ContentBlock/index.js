/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const containerStyles = css`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

function ContentBlock(props) {
  return (
    <section css={containerStyles}>
      <header>
        <span>{props.title}</span>
        <span>{props.description}</span>
      </header>
      <div>{props.children}</div>
      <footer>{props.button}</footer>
    </section>
  );
}

export default ContentBlock;
