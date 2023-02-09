import {
  StyledModalLinkContainer,
  StyledModalLinkContent,
  StyledModalLinkDescription,
  StyledModalLinkImage,
  StyledModalLinkText,
  StyledModalLinkTextAndDescription,
} from "./ModalLink.styled";

export const ModalLink = ({
  // img,
  // text,
  // description,
  // altImg,
  text,
  primary,
  type,
  ...props
}: any) => {
  console.log(props);
  return (
    <StyledModalLinkContainer primary={primary} type={type}>
      <StyledModalLinkContent type={type}>
        {type !== "button" ? (
          <TextualModalLink
            {...props}
            primary={primary}
            type={type}
            text={text}
          />
        ) : (
          <div>TODO {text}</div>
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
}: any) => {
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
