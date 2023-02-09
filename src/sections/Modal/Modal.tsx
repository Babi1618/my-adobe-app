import { ModalSection } from "../../stories/ModalSection/ModalSection";
import "./modal.css";

export const Modal = ({data, linkSelected}:any) => {
  const section2 = {
    navLinkId: 1,
    sectionId: 2,
    wrapperId: 1,
    sections: [
      {
        text: "Resources",
        type: "title",
      },
      {
        text: "Resources Center",
      },
      {
        text: "Customer Success Stories",
      },
    ],
  };
  const section3 = {
    navLinkId: 1,
    sectionId: 2,
    wrapperId: 2,
    sections: [
      {
        text: "For Customer",
        type: "title",
      },
      {
        text: "Resources Center",
      },
      {
        text: "Customer Success Stories",
      },
    ],
  };
  return (
    <div id="navbar-modal">
      <div className="modal-container">
        <div className="modal-content">
          {data.sections.map((el: any, i: number) => {
            return <ModalSection key={i} sections={el} />;
          })}
        </div>
        <div className="modal-background" />
      </div>
    </div>
  );
};
