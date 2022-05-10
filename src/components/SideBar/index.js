import { Global } from "@emotion/react";
import { Container, Content, Button, disableScroll } from "./styles";
import { useState } from "react";
import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import Support from "./Support";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Content isOpen={isOpen}>
        {isOpen && <Global styles={disableScroll} />}
        <UserInfo />
        <Navigation />
        <Support />
      </Content>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Button>
    </Container>
  );
}

export default SideBar;
