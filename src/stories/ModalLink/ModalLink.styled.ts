import styled, { css } from "styled-components";

export const StyledModalLinkContainer = styled.div<any>`
  display: flex;
  max-width: 300px;
  gap: 15px;
  padding: 100px;
  padding: 8px 32px 4px;
  color: #2c2c2c;
  
  &:hover {
    background-color: #f5f5f5;
    background-color: ${({ primary, type }) =>
      (!primary !== (type === "title")) !== (type === "button")
        ? "#f5f5f5"
        : "inherit"};
  }
`;
export const StyledModalLinkContent = styled.div<any>`
  display: flex;
  gap: 15px;
  flex: 1;
  align-items: center;
  border-bottom: ${({ type }) => type === "title" && "1px solid black"};
`;
export const StyledModalLinkImageContainer = styled.div``;
export const StyledModalLinkImage = styled.img`
  height: 26px;
`;
export const StyledModalLinkTextAndDescription = styled.div<any>`
  display: flex;
  flex-direction: column;
`;
export const StyledModalLinkText = styled.div<any>`
  font-size: 14px;
  font-weight: ${({ type }) => type === "title" && "600"};
  color: ${({ primary }) => (primary ? "#1473E6" : "#2c2c2c")};
`;

export const StyledModalLinkDescription = styled.div`
  color: #656565;
  font-weight: 400;
  font-size: 12px;
`;
