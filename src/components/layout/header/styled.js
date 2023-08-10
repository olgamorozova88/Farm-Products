import styled from "styled-components";

const StyledHeader = styled.header`
  min-height: ${(props) => props.theme.footerHeight};
  padding: 10px 0;
  background-color: ${(props) => props.theme.whiteColor};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  z-index: 1;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { StyledHeader, HeaderContent };
