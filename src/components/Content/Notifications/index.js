import { Container, CheckboxesContainer, Button } from "./styles";
import ContentBlock from "../ContentBlock";
import Checkbox from "../Checkbox";

function Notifications() {
  return (
    <ContentBlock
      title="Notifications"
      description="Manage the notifications emailing"
      button={<Button type="submit">Save</Button>}
    >
      <Container>
        <CheckboxesContainer>
          <span>Notifications</span>
          <Checkbox name="email" label="Email" />
          <Checkbox
            name="pushNotifications"
            label="Push notifications"
            assistiveText="For your mobile or tablet device"
          />
          <Checkbox name="textMessages" label="Text Messages" />
          <Checkbox name="phoneCalls" label="Phone Calls" />
        </CheckboxesContainer>
        <CheckboxesContainer>
          <span>Messages</span>
          <Checkbox name="email" label="Email" />
          <Checkbox name="pushNotifications" label="Push notifications" />
          <Checkbox name="textMessages" label="Text Messages" />
        </CheckboxesContainer>
      </Container>
    </ContentBlock>
  );
}

export default Notifications;
