import styled from "@emotion/styled";

const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-width: 680px;
`;
const Button = styled.button`
  background: #1665d8;
  width: 152px;
  height: 40px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    background: white;
    color: #1665d8;
    border: 2px solid #1665d81a;
  }
`;

export { InputsContainer, Button };
