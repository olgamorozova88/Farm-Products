import { StyledHeader, HeaderContent } from "./styled";
import Container from "../container/container";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";

const Header = () => (
  <StyledHeader>
    <Container>
      <HeaderContent>
        <Logo />
        <Nav />
      </HeaderContent>
    </Container>
  </StyledHeader>
);

export default Header;
