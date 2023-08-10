import { Outlet } from "react-router-dom";
import { Page } from "./styled";
import Header from "../header/header";
import Footer from "../footer/footer";

const PageWrapper = () => (
  <Page>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </Page>
);

export default PageWrapper;
