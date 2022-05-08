import { Container, Image, Text } from "./styles";
import logoSVG from "./logo.svg";

function Logo() {
  return (
    <Container as="a" href="/">
      <Image src={logoSVG} />
      <Text>Devias Kit</Text>
    </Container>
  );
}

export default Logo;
