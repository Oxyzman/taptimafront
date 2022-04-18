/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "../Link";
import dashSVG from "./dash.svg"
import usersSVG from "./users.svg"
import prodSVG from "./prod.svg"
import authSVG from "./auth.svg"
import typoSVG from "./typo.svg"
import iconsSVG from "./icons.svg"

const containerStyles = css`
  margin: 20px 0;
  padding: 25px 0;
  border-top: 1px solid #E4E7EB;
  border-bottom: 1px solid #E4E7EB;
`;

const listStyles = css`
  margin: 0 18px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

    
`;

function Navigation() {
  return (
    <nav css={containerStyles}>
      <ul css={listStyles}>
        <li>
          <Link text="Dashboard" url="/dashboard" img={dashSVG} />
        </li>
        <li>
          <Link text="Users" url="/users" img={usersSVG} />
        </li>
        <li>
          <Link text="Products" url="/products" img={prodSVG} />
        </li>
        <li>
          <Link text="Authentication" url="/authentication" img={authSVG} />
        </li>
        <li>
          <Link text="Typography" url="/typography" img={typoSVG} />
        </li>
        <li>
          <Link text="Icons & Images" url="/iconsandimages" img={iconsSVG} />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
