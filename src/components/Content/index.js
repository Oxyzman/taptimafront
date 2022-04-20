/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Menu from './Menu'
import UserInfo from './UserInfo'
import ProfileSettings from './ProfileSettings'
import Notifications from './Notifications'

const containerStyles = css`
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    

    @media (max-width: 1000px) {
      grid-column: 1/3;
    }

`;


function Content() {
  return <main css={containerStyles}>
        <Menu />
        <UserInfo />
        <ProfileSettings />
        <Notifications />
  </main>;
}

export default Content;
