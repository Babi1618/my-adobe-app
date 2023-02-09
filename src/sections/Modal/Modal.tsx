import { ModalLink } from "../../stories/ModalLink/ModalLink";
import { ModalSection } from "../../stories/ModalSection/ModalSection";
import "./modal.css";

export const Modal = () => {
  const section = {
    navLinkId: 1,
    sectionId: 1,
    wrapperId: 1,
    sections: [
      {
        text: "What is Creativity Cloud",
        description: "Creative apps and services for everyone",
        altImg: "Creative Cloud icon",
        img: "https://www.adobe.com/content/dam/cc/icons/creativecloud-app.svg",
      },
      {
        text: "Photographers",
        description: "Photographers Lightroom, Photoshop, and more",
      },
      {
        text: "Students and teachers",
        description: "Save over 60% on Creative Cloud",
      },

      {
        text: "Individuals",
        description: "20+ creative apps, Acrobat, and more",
      },
      {
        text: "Small and medium business",
        description: "Creative apps and services for teams",
      },
      {
        text: "Enterprise",
        description: "Solutions for large organizations",
      },
      {
        text: "Schools and universities",
        description: "Simple administration and licensing",
      },
      {
        text: "View plans and pricing ",
        type: "button",
        buttonType: "primary",
      },
    ],
  };
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
          <ModalSection sections={[section]} />
          <ModalSection sections={[section2, section3]} />
          {/* <ModalSection section={section.sections} /> */}
        </div>
        <div className="modal-background"></div>
      </div>
    </div>
  );
};
