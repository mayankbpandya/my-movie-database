import {Outlet, useNavigation} from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const AppLayout = () => {
  const  navigate = useNavigation();
  if(navigate.state === "loading") {
    return <span className="loading loading-infinity loading-xl"></span>;
  } else if (navigate.state === "error") {
    return <div className="text-center text-red-500">Error loading data</div>;
  }
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout;