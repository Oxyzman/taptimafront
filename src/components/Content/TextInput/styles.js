import styled from "@emotion/styled";

const Container = styled.label`
  min-width: 220px;
  max-width: 328px;
  width: 100%;

  @media (max-width: 1462px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
  padding: 15px 16px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  background: white;

  &:hover {
    border-color: #1665d8;
  }

  &:focus {
    border-color: #1665d8;
  }

  &:focus + span {
    color: #1665d8;
  }
`;

const AssistiveText = styled.span`
  display: block;
  font-size: 12px;
  line-height: 16px;
  margin-top: 3px;
  padding-left: 18px;
`;

export { Container, Input, AssistiveText };
