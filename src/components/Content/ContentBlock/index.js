import {
  Container,
  Header,
  Content,
  Footer,
  TitleText,
  DescriptionText,
} from "./styles";

function ContentBlock(props) {
  return (
    <Container>
      <Header>
        <TitleText>{props.title}</TitleText>
        <DescriptionText>{props.description}</DescriptionText>
      </Header>
      <form>
        <Content>{props.children}</Content>
        <Footer>{props.button}</Footer>
      </form>
    </Container>
  );
}

export default ContentBlock;
