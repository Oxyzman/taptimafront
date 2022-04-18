/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "../Link";
import supSVG from "./sup.svg"

const containerStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0 18px;
`;
const textStyle = css`
  color: rgba(0, 0, 0, 0.328974);
  margin-bottom: 19px;
`

function Support() {
  return (
    <section css={containerStyles}>
      <span css={textStyle}>Support</span>
      <Link text="Support" url="/support" img={supSVG} />
    </section>
  );
}

export default Support;
