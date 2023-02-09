import { rawListeners } from "process";
import { ModalLink } from "../ModalLink/ModalLink";
import "./modalSection.css";
import {
  StyledModalLinksWrapper,
  StyledModalSection,
} from "./ModalSection.styled";

export const ModalSection = ({ sections }: any) => {
  return (
    <StyledModalSection>
      {sections.map((el: any, i: number) => {
        return (
          <StyledModalLinksWrapper>
            {el.sections.map((el: any, i: number) => {
              return (
                <ModalLink
                  key={i}
                  altImg={el.altImg}
                  img={el.img}
                  text={el.text}
                  description={el.description}
                  type={el.type}
                  buttonType={el.buttonType}
                />
              );
            })}
          </StyledModalLinksWrapper>
        );
      })}
    </StyledModalSection>
  );
};
