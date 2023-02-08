import { ModalLink } from "../ModalLink/ModalLink";
import "./modalSection.css";

export const ModalSection = () => {
  return (
    <div>
      <ModalLink
          altImg="Creative Cloud icon"
          img="https://www.adobe.com/content/dam/cc/icons/creativecloud-app.svg"
          text="prova"
          description="desc"
        />
              <ModalLink
          // altImg="Creative Cloud icon"
          // img="https://www.adobe.com/content/dam/cc/icons/creativecloud-app.svg"
          text="title"
          type="title"
          // description="desc"
        />
    </div>
  );
};
