import styled from "styled-components";

const OptionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const OptionItem = styled.li`
  margin-bottom: 8px;

&:last-child {
  margin-bottom: 0;
`;

const OptionProperty = styled.span`
  font-size: 14px;
  font-weight: ${(props) => (props.$isBold ? "700" : "400")};
  
  }
`;

export { OptionList, OptionItem, OptionProperty };
