import { Container, Input, AssistiveText } from "./styles";

function TextInput(props) {
  return (
    <Container>
      <Input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.assistiveText && (
        <AssistiveText>{props.assistiveText}</AssistiveText>
      )}
    </Container>
  );
}

export default TextInput;
