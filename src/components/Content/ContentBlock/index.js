/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const containerStyles = css`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background: white;
`;

const headerStyles = css`
  padding: 26px 24px;
`;

const contentStyles = css`
  padding: 24px;
  border-top: 1px solid #e4e7eb;
  border-bottom: 1px solid #e4e7eb;
`;

const footerStyles = css`
  padding: 26px 24px;
`;

const titleTextStyles = css`
  line-height: 24px;
  letter-spacing: 0.15px;
  color: black;
  font-weight: 500;
  margin-right: 16px;
`;

const descriptionTextStyles = css`
  font-size: 14px;
  line-height: 16px;
  color: #66788a;
  font-weight: 300;
`;

function ContentBlock(props) {
  return (
    <section css={containerStyles}>
      <header css={headerStyles}>
        <span css={titleTextStyles}>{props.title}</span>
        <span css={descriptionTextStyles}>{props.description}</span>
      </header>
      <form>
        <div css={contentStyles}>{props.children}</div>
        <footer css={footerStyles}>{props.button}</footer>
      </form>
    </section>
  );
}

export default ContentBlock;
