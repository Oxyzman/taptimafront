/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import ContentBlock from "../ContentBlock";
import TextInput from "../TextInput";

const inputsContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-width: 680px;
`;
const buttonStyles = css`
  background: #1665d8;
  width: 152px;
  height: 40px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    background: white;
    color: #1665d8;
    border: 2px solid #1665d81a;
  }
`;

function ProfileSettings() {
  return (
    <ContentBlock
      title="Basic Profile"
      description="The information can be edited from your profile page"
      button={<button css={buttonStyles}>Save Settings</button>}
    >
      <div css={inputsContainerStyles}>
        <TextInput
          name="firstName"
          placeholder="First Name"
          assistiveText="Please specify the first name"
          type="text"
        />
        <TextInput
          name="lastName"
          placeholder="Last Name"
          assistiveText="Please specify the last name"
          type="text"
        />
        <TextInput name="email" placeholder="Email" type="email" />
        <TextInput name="phone" placeholder="Phone" type="tel" />
        <TextInput name="country" placeholder="Country" type="text" />
        <TextInput name="city" placeholder="City" type="text" />
      </div>
    </ContentBlock>
  );
}

export default ProfileSettings;
