import styled from "styled-components";
import aboutImage from "../../../assets/img/hero-image.svg";
import Title from "../../ui/title/title";

const AboutSection = styled.section`
  background-color: ${(props) => props.theme.bgColor};
`;

const AboutContent = styled.div`
  padding: 183px 0;
  background-image: url(${aboutImage});
  background-repeat: no-repeat;
  background-size: 446px 563px;
  background-position: right bottom;
`;

const AboutTitle = styled(Title)`
  max-width: 538px;
  margin-bottom: 24px;
`;

const AboutText = styled.p`
  margin: 0;
  max-width: 538px;
`;

export { AboutSection, AboutContent, AboutTitle, AboutText };
