import { ModalLink } from "../../stories/ModalLink/ModalLink";
import { StyledModalLinksWrapper } from "./ModalLinksWrapper.styled";

export const ModalLinksWrapper = ({ wrapper }: any) => {
  return (
    <StyledModalLinksWrapper>
      {wrapper.links.map((el: any, i: number) => {
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
};
