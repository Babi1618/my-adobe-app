import {
  StyledModalLinkContainer,
  StyledModalLinkDescription,
  StyledModalLinkImage,
  StyledModalLinkText,
  StyledModalLinkTextAndDescription,
} from "./ModalLink.styled";

export const ModalLink = ({ img, text, description, altImg, primary }: any) => {
  console.log(primary);
  return (
    <StyledModalLinkContainer primary={primary}>
      {img && (
        <StyledModalLinkImage alt={altImg ? altImg : "Image"} src={img} />
      )}
      <StyledModalLinkTextAndDescription>
        {text && (
          <StyledModalLinkText primary={primary}>{text}</StyledModalLinkText>
        )}
        {description && (
          <StyledModalLinkDescription>{description}</StyledModalLinkDescription>
        )}
      </StyledModalLinkTextAndDescription>
    </StyledModalLinkContainer>
  );
};
