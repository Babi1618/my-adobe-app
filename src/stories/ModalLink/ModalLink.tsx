import {
  StyledModalLinkContainer,
  StyledModalLinkContent,
  StyledModalLinkDescription,
  StyledModalLinkImage,
  StyledModalLinkText,
  StyledModalLinkTextAndDescription,
} from "./ModalLink.styled";

export const ModalLink = ({
  img,
  text,
  description,
  altImg,
  primary,
  type,
}: any) => {
  console.log(primary);
  return (
    <StyledModalLinkContainer primary={primary} type={type}>
      <StyledModalLinkContent type={type}>
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
            <StyledModalLinkDescription>
              {description}
            </StyledModalLinkDescription>
          )}
        </StyledModalLinkTextAndDescription>
      </StyledModalLinkContent>
    </StyledModalLinkContainer>
  );
};
