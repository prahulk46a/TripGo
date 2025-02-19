import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/navbar/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
