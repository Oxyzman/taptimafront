import {
  Container,
  Block,
  UserinfoBlock,
  InneruserinfoBlock,
  Image,
  ButtonsBlock,
} from "./styles";
import avatarJPG from "./avatar.jpg";

function UserInfo() {
  return (
    <Container>
      <Block>
        <UserinfoBlock>
          <span>Adrian Stefan</span>
          <InneruserinfoBlock>
            <span>Rm. Valcea, Romania</span>
            <span>4:32PM (GMT-4)</span>
          </InneruserinfoBlock>
        </UserinfoBlock>
        <Image
          src={avatarJPG}
          alt="User avatar
				;"
        />
      </Block>
      <ButtonsBlock>
        <button>Upload Picture</button>
        <button>Remove Picture</button>
      </ButtonsBlock>
    </Container>
  );
}

export default UserInfo;
