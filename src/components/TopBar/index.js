import Logo from "./Logo";
import Button from "./Button";
import notificationSvg from "./notification.svg";
import exitSvg from "./exit.svg";
import { Container, ButtonsContainer } from "./styles";

function TopBar() {
  return (
    <Container>
      <Logo />
      <ButtonsContainer>
        <Button icon={notificationSvg} text="Notification" />
        <Button icon={exitSvg} text="Exit" />
      </ButtonsContainer>
    </Container>
  );
}

export default TopBar;
