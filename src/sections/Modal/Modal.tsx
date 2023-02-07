import { ModalSection } from "../ModalSection/ModalSection";
import "./modal.css";

export const Modal = () => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
          <ModalSection />
          {/* <ModalSection />
          <ModalSection /> */}
        </div>
      </div>
    </div>
  );
};
