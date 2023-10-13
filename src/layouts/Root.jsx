import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <Outlet />
      <div className="">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Root;
