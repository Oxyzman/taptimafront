import styled from "@emotion/styled";

const ButtonStyles = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background: initial;
  cursor: pointer;
`;

function Button(props) {
  return (
    <ButtonStyles type="button">
      <img src={props.icon} />
    </ButtonStyles>
  );
}

export default Button;
