import { Container, Image, TextName, TextProf } from "./styles";
import avatarJPG from "./avatar.jpg";

function UserInfo() {
  return (
    <Container>
      <Image src={avatarJPG} alt="Avatar" />
      <TextName>Roman Kutepov</TextName>
      <TextProf>Brain Director</TextProf>
    </Container>
  );
}

export default UserInfo;
