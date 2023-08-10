import { useLocation } from "react-router-dom";
import { LogoLink, LogoText } from "./styled";
import { ReactComponent as LogoImage } from "../../../assets/img/logo.svg";
import { AppRoutes } from "../../../const";

const Logo = () => {
  const { pathname } = useLocation();
  return pathname === AppRoutes.MAIN ? (
    <LogoLink as="span">
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  ) : (
    <LogoLink to={AppRoutes.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
};

export default Logo;
