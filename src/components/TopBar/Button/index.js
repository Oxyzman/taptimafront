import ButtonStyles from "./styles";

function Button(props) {
  return (
    <ButtonStyles type="button">
      <img src={props.icon} />
    </ButtonStyles>
  );
}

export default Button;
