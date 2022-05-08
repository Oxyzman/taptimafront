import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Image = styled.img`
  display: block;
  width: 36px;
  height: 36px;
  margin-right: 8px;
`;

const Text = styled.span`
  color: white;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.0555556px;

  @media (max-width: 400px) {
    display: none;
  }
`;

export { Container, Image, Text };
