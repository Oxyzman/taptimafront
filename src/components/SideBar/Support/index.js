import { Container, Text, LinkContainer } from "./styles";
import Link from "../Link";
import supSVG from "./sup.svg";

function Support() {
  return (
    <Container>
      <Text>Support</Text>
      <LinkContainer>
        <Link text="Support" url="/support" img={supSVG} />
      </LinkContainer>
    </Container>
  );
}

export default Support;
