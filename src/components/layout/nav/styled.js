import styled from "styled-components";
import Button from "../../ui/button/button";

const MainPageButton = styled(Button)`
  background-color: transparent;
  color: inherit;

  &:hover,
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
`;

export default MainPageButton;
