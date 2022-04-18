/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import logoSVG from "./logo.svg";

const containerStyles = css`
  display: flex;
  align-items: center;
`;

const imageStyles = css`
  display: block;
  width: 36px;
  height: 36px;
  margin-right: 8px;
`;

const textStyles = css`
  color: white;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.0555556px;

  @media (max-width: 400px) {
    display: none;
  }
`;

function Logo() {
  return (
    <div css={containerStyles}>
      
      <img css={imageStyles} src={logoSVG} />
      <span css={textStyles}>Devias Kit</span>
      
    </div>
  );
}

export default Logo;
