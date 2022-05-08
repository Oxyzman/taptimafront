import styled from "@emotion/styled";

const Links = styled.a`
  color: black;
  text-decoration: none;
  display: flex;
`;
const Text = styled.span`
  margin-left: 10px;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.05px;
  color: #66788a;
`;
const Image = styled.img`
  width: 26px;
  height: 26px;
`;

function Link(props) {
  return (
    <Links href={props.url}>
      <Image src={props.img} />
      <Text>{props.text}</Text>
    </Links>
  );
}

export default Link;
