/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const containerStyles = css`
    display: block;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
    height: 414px;
    width: 910px;
    margin: 25px;
    border-radius: 5px;
`;


function Notifications() {
  return <main css={containerStyles}>
      Notifications
  </main>;
}

export default Notifications;
