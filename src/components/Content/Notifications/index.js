/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import ContentBlock from "../ContentBlock";

function Notifications() {
  return (
    <ContentBlock
      title="Notifications"
      description="Mange the notifications emailing"
      button={<button>Knopka</button>}
    >
      <div>Notifcitations </div>
    </ContentBlock>
  );
}

export default Notifications;
