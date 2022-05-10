import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  color: rgba(0, 0, 0, 0.328974);
  margin-bottom: 19px;
  margin: 0 18px;
`;
const LinkContainer = styled.span`
  padding: 14px 19px;

  &:hover {
    background: #f6f9fd;
    box-shadow: inset 3px 0 #1665d8;
    border-radius: 4px;
    transition-duration: 0.5s;
  }
`;

export { Container, Text, LinkContainer };
