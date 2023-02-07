import styled, { css } from "styled-components";

export const StyledModalLinkContainer = styled.div<any>`
  display: flex;
  max-width: 300px;
  align-items: center;
  gap: 15px;
  padding: 100px;
  padding: 8px 32px 4px;
  &:hover {
    background-color: #f5f5f5;
    background-color: ${({ primary }) => (!primary ? "#f5f5f5" : "inherit")};
  }
`;
export const StyledModalLinkImageContainer = styled.div``;
export const StyledModalLinkImage = styled.img`
  height: 26px;
`;
export const StyledModalLinkTextAndDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledModalLinkText = styled.div<any>`
  color: #2c2c2c;
  font-size: 14px;
  color: ${({ primary }) => (primary ? "#1473E6" : "#2c2c2c")};
`;
export const StyledModalLinkDescription = styled.div`
  color: #656565;
  font-weight: 400;
  font-size: 12px;
`;
