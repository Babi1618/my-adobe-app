import {
  StyledModalLinkContainer,
  StyledModalLinkDescription,
  StyledModalLinkImage,
  StyledModalLinkTitle,
  StyledModalLinkTitleAndDescription,
} from "./ModalLink.styled";

export const ModalLink = () => {
  return (
    <StyledModalLinkContainer>
      <StyledModalLinkImage>img</StyledModalLinkImage>
      <StyledModalLinkTitleAndDescription>
        <StyledModalLinkTitle>titolo</StyledModalLinkTitle>
        <StyledModalLinkDescription>descrizione</StyledModalLinkDescription>
      </StyledModalLinkTitleAndDescription>
    </StyledModalLinkContainer>
  );
};
