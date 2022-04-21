/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import avatarJPG from "./avatar.jpg";

const containerStyles = css`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  max-width: 381px;
  width: 100%;
  margin-right: 25px;
`;

function UserInfo() {
  return (
    <section css={containerStyles}>
      <div>
        <div>
          <span>Name</span>
          <span>Address</span>
        </div>
        <img src={avatarJPG} />
      </div>
      <footer>
        <button>Upload Picture</button>
        <button>Remove Picture</button>
      </footer>
    </section>
  );
}

export default UserInfo;
