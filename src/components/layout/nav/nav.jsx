import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../../const";
import Button from "../../ui/button/button";

const Nav = () => {
  const { pathname } = useLocation();
  return pathname === AppRoutes.MAIN ? (
    <Button minWidth={260} link={AppRoutes.BUY}>
      Купить
    </Button>
  ) : (
    <Button minWidth={260} link={AppRoutes.MAIN} isMainLink>
      Главная
    </Button>
  );
};

export default Nav;
