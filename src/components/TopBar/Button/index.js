/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const buttonStyles = css`
  display: flex;
  width: 24px;
  height: 24px;
	border: none;
	padding: 0;
	background: initial;
	cursor: pointer;
`;

function Button(props) {
  return (
    <button css={buttonStyles}>
      <img src={props.icon} />
    </button>
  );
}

export default Button;
