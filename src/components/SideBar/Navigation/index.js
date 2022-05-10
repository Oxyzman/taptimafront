import { Container, List } from "./styles";
import Link from "../Link";
import dashHoverSVG from "./dashHover.svg";
import usersSVG from "./users.svg";
import prodSVG from "./prod.svg";
import authSVG from "./auth.svg";
import typoSVG from "./typo.svg";
import iconsSVG from "./icons.svg";

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
