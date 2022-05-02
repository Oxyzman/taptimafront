/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "../Link";
import dashSVG from "./dash.svg";
import usersSVG from "./users.svg";
import prodSVG from "./prod.svg";
import authSVG from "./auth.svg";
import typoSVG from "./typo.svg";
import iconsSVG from "./icons.svg";

const containerStyles = css`
  margin: 20px 0;
  padding: 25px 0;
  border-top: 1px solid #e4e7eb;
  border-bottom: 1px solid #e4e7eb;
`;

const listStyles = css`
  margin: 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  & li {
    padding: 14px 19px;

    &:hover {
      background: #f6f9fd;
      box-shadow: inset 3px 0 #1665d8;
      border-radius: 4px;
      transition-duration: 0.5s;
    }

    &.active {
      background: #f6f9fd;
      box-shadow: inset 3px 0 #1665d8;
      border-radius: 4px;

      & img {
        color: blue;
      }
      & span {
        color: #212529;
      }
    }
  }
`;

function Navigation() {
  return (
    <nav css={containerStyles}>
      <ul css={listStyles}>
        <li className="active">
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
