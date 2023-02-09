import { ModalLink } from "../ModalLink/ModalLink";
import "./modalSection.css";
import { StyledModalSection } from "./ModalSection.styled";

export const ModalSection = ({ section }: any) => {
  console.log(section);
  return (
    <StyledModalSection>
      {section.map((el: any, i: number) => {
        return (
          <ModalLink
            altImg={el.altImg}
            img={el.img}
            text={el.text}
            description={el.description}
            type={el.type}
          />
        );
      })}
    </StyledModalSection>
  );
};
