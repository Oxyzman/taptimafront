/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const containerStyles = css`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
`;

const checkboxStyles = css`
  display: block;
  margin-right: 9px;
  padding-top: 2px;
  width: 18px;
  height: 18px;
`;

const labelStyles = css`
  display: block;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
`;

const assistiveTextStyles = css`
  font-size: 12px;
  line-height: 14px;
  color: #66788a;
`;

function Checkbox(props) {
  return (
    <label css={containerStyles}>
      <input css={checkboxStyles} name={props.name} type="checkbox" />
      <div>
        <span css={labelStyles}>{props.label}</span>
        {props.assistiveText && (
          <span css={assistiveTextStyles}>{props.assistiveText}</span>
        )}
      </div>
    </label>
  );
}

export default Checkbox;
