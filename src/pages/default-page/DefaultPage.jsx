import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/navbar/Header";

const DefaultPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultPage;
