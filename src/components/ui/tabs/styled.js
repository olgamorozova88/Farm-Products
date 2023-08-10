import styled from "styled-components";

const TabsHeader = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TabsItem = styled.li`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const TabsButton = styled.button`
  display: block;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) =>
    props.$isActive ? props.theme.whiteColor : props.theme.textColor};
  background-color: ${(props) =>
    props.$isActive
      ? props.theme.featurePositiveIconColor
      : props.theme.mutedColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.$isActive ? "default" : "pointer")};
`;

const TabsText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export { TabsHeader, TabsItem, TabsButton, TabsText };
