import { ModalLinksWrapper } from "../ModalLinksWrapper/ModalLinksWrapper";
import "./modalSection.css";
import { StyledModalSection } from "./ModalSection.styled";

export const ModalSection = ({ sections }: any) => {
  return (
    <StyledModalSection>
      {sections.wrapper.map((el: any, i: number) => {
        return <ModalLinksWrapper key={i} links={el.links} />;
      })}
    </StyledModalSection>
  );
};
