import { ModalLink } from "../../stories/ModalLink/ModalLink";
import { ModalSection } from "../../stories/ModalSection/ModalSection";
import "./modal.css";

export const Modal = () => {
  return (
    <div id="navbar-modal">
      <div className="modal-container">
        <div className="modal-content">
          <ModalSection />
          {/* <ModalLink
          altImg="Creative Cloud icon"
          img="https://www.adobe.com/content/dam/cc/icons/creativecloud-app.svg"
          text="prova"
          description="desc"
        /> */}
        </div>
        <div className="modal-background"></div>
      </div>
    </div>
  );
};
