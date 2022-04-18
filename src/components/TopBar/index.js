/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Logo from "./Logo";
import Button from "./Button";
import notificationSvg from "./notification.svg";
import exitSvg from "./exit.svg";

const containerStyles = css`
  background: #3f51b5;
  grid-column: 1/3;
  grid-row: 1/2;
  display: flex;
  align-items: center;
	justify-content: space-between;
  padding: 0 24px;

  @media (max-width: 1000px) {
    grid-column: 2/3;
  }
`;

const buttonsContainerStyles = css`
  display: flex;
	gap: 16px;
`;


function TopBar() {
  return (
    <section css={containerStyles}>
      <Logo />
      <div css={buttonsContainerStyles}>
        <Button icon={notificationSvg} />
        <Button icon={exitSvg} />
      </div>
    </section>
  );
}

export default TopBar;
