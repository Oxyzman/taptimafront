import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 16px;
`;
const TextName = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.05px;
  color: #3a3b3f;
  margin-bottom: 8px;
`;
const TextProf = styled.div`
font-size: 12px
line-height: 16px;
color: #9EA0A5;
`;

export { Container, Image, TextName, TextProf };
