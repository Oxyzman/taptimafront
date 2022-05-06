/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "../Link";
import supSVG from "./sup.svg";

const containerStyles = css`
  display: flex;
  flex-direction: column;
`;
const textStyle = css`
  color: rgba(0, 0, 0, 0.328974);
  margin-bottom: 19px;
  margin: 0 18px;
`;
const hoverStyle = css`
  padding: 14px 19px;

  &:hover {
    background: #f6f9fd;
    box-shadow: inset 3px 0 #1665d8;
    border-radius: 4px;
    transition-duration: 0.5s;
  }
`;

function Support() {
  return (
    <section css={containerStyles}>
      <span css={textStyle}>Support</span>
      <span css={hoverStyle}>
        <Link text="Support" url="/support" img={supSVG} />
      </span>
    </section>
  );
}

export default Support;
