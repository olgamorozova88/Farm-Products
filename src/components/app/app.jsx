import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoutes } from "../../const";
import GlobalStyle from "./styled";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page";
import Order from "../pages/order/order";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top";
import features from "../../mocks/features";
import products from "../../mocks/products";

const App = () => (
  <>
    <GlobalStyle />
    <Router basename="farm-products">
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<PageWrapper />}>
          <Route index element={<MainPage features={features} />} />
          <Route path={AppRoutes.BUY} element={<Order products={products} />} />
        </Route>
      </Routes>
    </Router>
  </>
);

export default App;
