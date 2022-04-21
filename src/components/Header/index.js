/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import Support from "./Support";


const containerStyles = css`
  grid-column: 1/2;
  grid-row: 2/3;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);

  @media (max-width: 1000px) {
    grid-row: 1/2;
  }
`;

const baseHeaderStyles = css`
  background: #ffffff;
  padding: 24px 16px;

  @media (max-width: 1000px) {
    position: fixed;
    z-index: 100;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
		overflow-y: auto;
  }
`;

const buttonStyles = css`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
		border: none;
    padding: 0;
    background: #3f51b5;
    cursor: pointer;
    width: 100%;
    height: 100%;

    & > span {
      display: block;
      width: 25px;
      height: 2px;
      background: white;
      margin-bottom: 5px;
    }
  }
`;


function Header() {
 
  const [isOpen, setIsOpen] = useState(false);

  
  const headerStyles = css`
    ${baseHeaderStyles}

    @media (max-width: 1000px) {
      display: ${isOpen ? "block" : "none"};
    }
  `;

  return (
    <div css={containerStyles}>
      <header css={headerStyles}>
        <UserInfo />
        <Navigation />
        <Support />
      </header>
      <button onClick={() => setIsOpen(!isOpen)} css={buttonStyles}>
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

export default Header;
