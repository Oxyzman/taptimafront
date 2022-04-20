/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const containerStyles = css`
    display: block;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
    height: 255px;
    width: 381px;
    margin: 25px;
    border-radius: 5px;
`;


function UserInfo() {
  return <main css={containerStyles}>
      UserInfo
  </main>;
}

export default UserInfo;
