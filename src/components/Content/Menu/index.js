import { Container, List } from "./styles";

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
