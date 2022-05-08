/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  box-shadow: 3px 0 4px rgba(0, 0, 0, 0.3);
  padding: 19px 24px 0;
`;

const List = styled.ul`
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: auto;

  & a {
    display: block;
    padding-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    text-decoration: none;
    color: black;
    white-space: nowrap;

    &:hover {
      border-bottom: 3px solid #1665d8;
    }

    &.active {
      border-bottom: 3px solid #1665d8;
    }
  }
`;

function Menu() {
  return (
    <Container>
      <List>
        <li>
          <a href="/profile" className="active">
            Profile
          </a>
        </li>
        <li>
          <a href="/account">Account</a>
        </li>
        <li>
          <a href="/price">Price Plan</a>
        </li>
      </List>
    </Container>
  );
}

export default Menu;
