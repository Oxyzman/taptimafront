/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import avatarJPG from "./avatar.jpg";

const containerStyles = css`
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  max-width: 381px;
  width: 100%;
`;
const blockStyles = css`
  display: flex;
  gap: 41px;
  padding: 24px;
  border-bottom: 1px solid #e4e7eb;
`;
const userinfoBlockStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.06px;
`;
const inneruserinfoBlockStyles = css`
  display: flex;
  flex-direction: column;

  color: #9ea0a5;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05px;
`;
const imageStyles = css`
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 10%;
  overflow: hidden;
  max-widht: 100%;
`;
const buttonStyles = css`
  display: flex;
  gap: 58px;
  margin: 10px 24px;

  & button {
    background: white;
    width: 147px;
    height: 40px;
    border: none;
    color: #425a70;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1.25px;
    line-height: 16px;
    text-transform: uppercase;
  }

  & button:hover {
    color: #1665d8;
  }
`;

function UserInfo() {
  return (
    <section css={containerStyles}>
      <div css={blockStyles}>
        <div css={userinfoBlockStyles}>
          <span>Adrian Stefan</span>
          <div css={inneruserinfoBlockStyles}>
            <span>Rm. Valcea, Romania</span>
            <span>4:32PM (GMT-4)</span>
          </div>
        </div>
        <img src={avatarJPG} alt="Аватар пользователя" css={imageStyles} />
      </div>
      <footer css={buttonStyles}>
        <button>Upload Picture</button>
        <button>Remove Picture</button>
      </footer>
    </section>
  );
}

export default UserInfo;
