/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const linkStyles = css`
  color: black;
  text-decoration: none;
  display: flex;
`;
const textStyle = css`
  margin-left: 10px;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.05px;
  color: #66788a;
`;
const imgStyle = css`
  width: 26px;
  height: 26px;
`;

function Link(props) {
  return (
    <a href={props.url} css={linkStyles}>
      <img src={props.img} css={imgStyle} />
      <span css={textStyle}>{props.text}</span>
    </a>
  );
}

export default Link;
