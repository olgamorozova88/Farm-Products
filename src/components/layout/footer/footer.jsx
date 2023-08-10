import { StyledFooter, FooterContent, FooterCopyright } from "./styled";
import Container from "../container/container";
import Logo from "../../ui/logo/logo";

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterContent>
        <Logo />
        <FooterCopyright>Cоздано 2021</FooterCopyright>
      </FooterContent>
    </Container>
  </StyledFooter>
);

export default Footer;
