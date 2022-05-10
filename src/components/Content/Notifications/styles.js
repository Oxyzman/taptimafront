import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const CheckboxesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;
  width: 100%;

  & > span {
    font-weight: 500;
    letter-spacing: -0.05px;
    margin-bottom: 8px;
  }
`;
const Button = styled.button`
  background: white;
  width: 152px;
  height: 40px;
  border: 2px solid #1665d81a;
  color: #1665d8;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    background: #1665d8;
    color: white;
  }
`;

export { Container, CheckboxesContainer, Button };
