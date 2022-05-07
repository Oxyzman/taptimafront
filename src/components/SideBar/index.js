import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import Support from "./Support";

const Container = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1000px) {
    grid-row: 1/2;
    box-shadow: none;
  }
`;

const Content = styled.div`
  background: #ffffff;
  padding: 24px 16px;

  @media (max-width: 1000px) {
    position: fixed;
    z-index: 100;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

const Button = styled.button`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: none;
    padding: 0;
    background: #3f51b5;
    cursor: pointer;
    width: 100%;
    height: 100%;

    & > span {
      display: block;
      width: 25px;
      height: 2px;
      background: white;
      margin-bottom: 5px;
    }
  }
`;

const disableScroll = css`
  body {
    overflow: hidden;
  }
`;

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
