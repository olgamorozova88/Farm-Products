import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../../const";
import Button from "../../ui/button/button";
import MainPageButton from "./styled";

const Nav = () => {
  const { pathname } = useLocation();
  return pathname === AppRoutes.MAIN ? (
    <Button minWidth={260} link={AppRoutes.BUY}>
      Купить
    </Button>
  ) : (
    <MainPageButton minWidth={260} link={AppRoutes.MAIN}>
      Главная
    </MainPageButton>
  );
};

export default Nav;
