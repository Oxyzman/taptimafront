import styled from "@emotion/styled";

const Container = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
`;

const CheckboxContainer = styled.input`
  display: block;
  margin-right: 9px;
  padding-top: 2px;
  width: 18px;
  height: 18px;
`;

const Label = styled.span`
  display: block;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    color: #1665d8;
  }
`;

const AssistiveText = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #66788a;
`;

function Checkbox(props) {
  return (
    <Container>
      <CheckboxContainer name={props.name} type="checkbox" />
      <span>
        <Label>{props.label}</Label>
        {props.assistiveText && (
          <AssistiveText>{props.assistiveText}</AssistiveText>
        )}
      </span>
    </Container>
  );
}

export default Checkbox;
