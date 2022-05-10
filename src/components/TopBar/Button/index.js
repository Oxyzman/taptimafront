import ButtonStyles from "./styles";

function Button(props) {
  return (
    <ButtonStyles type="button">
      <img src={props.icon} alt={props.text} />
    </ButtonStyles>
  );
}

export default Button;
