/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Menu from "./Menu";
import UserInfo from "./UserInfo";
import ProfileSettings from "./ProfileSettings";
import Notifications from "./Notifications";

const containerStyles = css`
  grid-column: 2/3;
  grid-row: 2/3;
  background: #f2f2f2;

  @media (max-width: 1000px) {
    grid-column: 1/3;
  }
`;

const innerContainerStyles = css`
  display: flex;
  padding: 21px 21px 43px 21px;
`;

const innerSecondContainerStyles = css`
  max-width: 910px;
  width: 100%;
`;

function Content() {
  return (
    <main css={containerStyles}>
      <Menu />
      <div css={innerContainerStyles}>
        <UserInfo />
        <div css={innerSecondContainerStyles}>
          <ProfileSettings />
          <Notifications />
        </div>
      </div>
    </main>
  );
}

export default Content;
