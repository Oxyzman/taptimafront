import { Container, CheckboxContainer, Label, AssistiveText } from "./styles";

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
