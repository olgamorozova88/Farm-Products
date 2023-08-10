import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoLink = styled(Link)`
  display: flex;
  align-itmes: center;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
`;

const LogoText = styled.span`
  margin-left: 24px;
  font-size: 28px;
  line-height: 1.5;
  font-weight: 700;
  color: inherit;
`;

export { LogoLink, LogoText };
