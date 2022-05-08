import styled from "@emotion/styled";
import Link from "../Link";
import dashHoverSVG from "./dashHover.svg";
import usersSVG from "./users.svg";
import prodSVG from "./prod.svg";
import authSVG from "./auth.svg";
import typoSVG from "./typo.svg";
import iconsSVG from "./icons.svg";

const Container = styled.nav`
  margin: 20px 0;
  padding: 25px 0;
  border-top: 1px solid #e4e7eb;
  border-bottom: 1px solid #e4e7eb;
`;

const List = styled.ul`
  margin: 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  & li {
    padding: 14px 19px;

    &:hover {
      background: #f6f9fd;
      box-shadow: inset 3px 0 #1665d8;
      border-radius: 4px;
      transition-duration: 0.5s;
    }

    &.active {
      background: #f6f9fd;
      box-shadow: inset 3px 0 #1665d8;
      border-radius: 4px;

      & span {
        color: #212529;
      }
    }
  }
`;

function Navigation() {
  return (
    <Container>
      <List>
        <li className="active">
          <Link text="Dashboard" url="/dashboard" img={dashHoverSVG} />
        </li>
        <li>
          <Link text="Users" url="/users" img={usersSVG} />
        </li>
        <li>
          <Link text="Products" url="/products" img={prodSVG} />
        </li>
        <li>
          <Link text="Authentication" url="/authentication" img={authSVG} />
        </li>
        <li>
          <Link text="Typography" url="/typography" img={typoSVG} />
        </li>
        <li>
          <Link text="Icons & Images" url="/iconsandimages" img={iconsSVG} />
        </li>
      </List>
    </Container>
  );
}

export default Navigation;
