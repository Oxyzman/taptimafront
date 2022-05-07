/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import ContentBlock from "../ContentBlock";
import Checkbox from "../Checkbox";

const containerStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const checkboxesContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;
  width: 100%;

  & > span {
    font-weight: 500;
    letter-spacing: -0.05px;
    margin-bottom: 8px;
  }
`;
const buttonStyles = css`
  background: white;
  width: 152px;
  height: 40px;
  border: 2px solid #1665d81a;
  color: #1665d8;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    background: #1665d8;
    color: white;
  }
`;

function Notifications() {
  return (
    <ContentBlock
      title="Notifications"
      description="Manage the notifications emailing"
      button={
        <button type="submit" css={buttonStyles}>
          Save
        </button>
      }
    >
      <div css={containerStyles}>
        <section css={checkboxesContainerStyles}>
          <span>Notifications</span>
          <Checkbox name="email" label="Email" />
          <Checkbox
            name="pushNotifications"
            label="Push notifications"
            assistiveText="For your mobile or tablet device"
          />
          <Checkbox name="textMessages" label="Text Messages" />
          <Checkbox name="phoneCalls" label="Phone Calls" />
        </section>
        <section css={checkboxesContainerStyles}>
          <span>Messages</span>
          <Checkbox name="email" label="Email" />
          <Checkbox name="pushNotifications" label="Push notifications" />
          <Checkbox name="textMessages" label="Text Messages" />
        </section>
      </div>
    </ContentBlock>
  );
}

export default Notifications;
