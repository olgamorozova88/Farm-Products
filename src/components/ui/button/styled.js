import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: block;
  width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : `100%`)};
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.whiteColor};
  font-weight: 700;
  padding: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonHoverColor};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }
  ${(props) =>
    props.$isMainLink &&
    `
      background-color: transparent;
      color: inherit;
      &:hover, &:active {
        background-color: transparent;
        box-shadow: none;
      }
  `}

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
    cursor: default;
  }
`;

export default StyledButton;
