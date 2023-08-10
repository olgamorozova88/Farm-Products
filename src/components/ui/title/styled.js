import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => {
    let fontSize = "36px";
    switch (props.$size) {
      case "big":
        fontSize = "44px";
        break;
      case "small":
        fontSize = "24px";
        break;
      case "extra-small":
        fontSize = "18px";
        break;
      default:
        break;
    }
    return fontSize;
  }};
  line-height: 1.15;
  font-weight: 700;
`;

export default StyledTitle;
