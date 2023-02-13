import { ModalLink } from "../ModalLink/ModalLink";
import { StyledModalLinksWrapper } from "./ModalLinksWrapper.styled";

export const ModalLinksWrapper = ({ links }: ModalLinksWrapperProps) => {
  const handleClick = (text: string) => {
    console.log(text);
  };
  console.log(links);
  return (
    <StyledModalLinksWrapper>
      {links.map((el: any, i: number) => {
        return (
          <ModalLink
            key={i}
            altImg={el.altImg}
            img={el.img}
            text={el.text}
            description={el.description}
            type={el.type}
            buttonType={el.buttonType}
            primary={el.type === "primary"}
            onClick={el.type !== "title" ? handleClick : null}
          />
        );
      })}
    </StyledModalLinksWrapper>
  );
};

interface ModalLinksWrapperProps {
  links: any;
}
