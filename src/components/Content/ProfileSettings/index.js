import { InputsContainer, Button } from "./styles";
import ContentBlock from "../ContentBlock";
import TextInput from "../TextInput";

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
