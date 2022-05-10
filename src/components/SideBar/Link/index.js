import { Links, Text, Image } from "./styles";

function Link(props) {
  return (
    <Links href={props.url}>
      <Image src={props.img} />
      <Text>{props.text}</Text>
    </Links>
  );
}

export default Link;
