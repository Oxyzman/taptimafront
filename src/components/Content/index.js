import { Container, InnerContainer, InnerSecondContainer } from "./styles";
import Menu from "./Menu";
import UserInfo from "./UserInfo";
import ProfileSettings from "./ProfileSettings";
import Notifications from "./Notifications";

function Content() {
  return (
    <Container>
      <Menu />
      <InnerContainer>
        <UserInfo />
        <InnerSecondContainer>
          <ProfileSettings />
          <Notifications />
        </InnerSecondContainer>
      </InnerContainer>
    </Container>
  );
}

export default Content;
