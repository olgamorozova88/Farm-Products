import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: ${(props) => props.theme.footerHeight};
  padding: 18px 0;
  background-color: ${(props) => props.theme.whiteColor};
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1) inset;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterCopyright = styled.span`
  padding: 5px;
  background-color: ${(props) => props.theme.featurePositiveColor};
`;
export { StyledFooter, FooterContent, FooterCopyright };
