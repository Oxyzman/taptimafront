/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import avatarJPG from './avatar.jpg'


const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
const imageStyles = css`
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 16px;
`;
const textStylesName = css `
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.05px;
  color: #3A3B3F;
  margin-bottom: 8px
`
const textStylesProf = css `
  font-size: 12px
  line-height: 16px;
  color: #9EA0A5;
`

function UserInfo() {
  return (
    <section css={containerStyles}>
      <img
        src={avatarJPG}
        alt=''
        css={imageStyles}
      />
      <div css={textStylesName}>Roman Kutepov</div>
      <div css={textStylesProf}>Brain Director</div>
    </section>
  );
}

export default UserInfo;
