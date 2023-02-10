import { Button } from "../Button/Button";
import {
  StyledModalLinkContainer,
  StyledModalLinkContent,
  StyledModalLinkDescription,
  StyledModalLinkImage,
  StyledModalLinkText,
  StyledModalLinkTextAndDescription,
} from "./ModalLink.styled";

export const ModalLink = ({
  text,
  primary,
  type,
  buttonType,
  onClick,
  ...props
}: ModalLinkProps) => {
  return (
    <StyledModalLinkContainer primary={primary} type={type} onClick={onClick}>
      <StyledModalLinkContent type={type}>
        {type !== "button" ? (
          <TextualModalLink
            {...props}
            primary={primary}
            type={type}
            text={text}
          />
        ) : (
          <Button label={text} primary={buttonType === "primary" && true} />
        )}
      </StyledModalLinkContent>
    </StyledModalLinkContainer>
  );
};

export const TextualModalLink = ({
  img,
  text,
  description,
  altImg,
  primary,
  type,
}: TextualModalLinkProps) => {
  return (
    <>
      {img && (
        <StyledModalLinkImage alt={altImg ? altImg : "Image"} src={img} />
      )}
      <StyledModalLinkTextAndDescription>
        {text && (
          <StyledModalLinkText primary={primary} type={type}>
            {text}
          </StyledModalLinkText>
        )}
        {description && (
          <StyledModalLinkDescription>{description}</StyledModalLinkDescription>
        )}
      </StyledModalLinkTextAndDescription>
    </>
  );
};

interface ModalLinkProps {
  text: string;
  description?: string;
  img?: string;
  altImg?: string;
  primary?: boolean;
  type: string;
  buttonType?: string;
  onClick: any;
}
type TextualModalLinkProps = Omit<ModalLinkProps, "onClick">;
