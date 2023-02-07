import { ModalLink } from "../../stories/ModalLink/ModalLink";
import "./modal.css";

export const Modal = () => {
  console.log("prova");
  return (
    <div className="modal-container">
      <div className="modal-content">
        <ModalLink
          altImg="Creative Cloud icon"
          img="https://www.adobe.com/content/dam/cc/icons/creativecloud-app.svg"
          text="prova"
          description="desc"
        />
      </div>
      {/* <div className="modal-background"></div> */}
    </div>
  );
};
