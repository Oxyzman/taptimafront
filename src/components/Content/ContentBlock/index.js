import styled from "@emotion/styled";

const Container = styled.section`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background: white;
`;

const Header = styled.header`
  padding: 26px 24px;
`;

const Content = styled.div`
  padding: 24px;
  border-top: 1px solid #e4e7eb;
  border-bottom: 1px solid #e4e7eb;
`;

const Footer = styled.footer`
  padding: 26px 24px;
`;

const TitleText = styled.span`
  line-height: 24px;
  letter-spacing: 0.15px;
  color: black;
  font-weight: 500;
  margin-right: 16px;
`;

const DescriptionText = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #66788a;
  font-weight: 300;
`;

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
