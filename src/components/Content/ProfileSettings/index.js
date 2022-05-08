import styled from "@emotion/styled";
import ContentBlock from "../ContentBlock";
import TextInput from "../TextInput";

const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-width: 680px;
`;
const Button = styled.button`
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
  transition-duration: 0.3s;
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
      button={<Button>Save Settings</Button>}
    >
      <InputsContainer>
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
      </InputsContainer>
    </ContentBlock>
  );
}

export default ProfileSettings;
