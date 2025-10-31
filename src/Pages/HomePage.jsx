
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import CircularIndeterminate from '../Common/components/Loading';
import ScrollToTop from '../Common/components/ScrollToTop';
import GlobalHeader from '../HeaderAndTopHeader/GlobalHeader';


const HomePage = () => {
  const location = useLocation();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isloading ? (
        <CircularIndeterminate />
        
      ) : (
        <div className=" mx-auto">
          <ScrollToTop />
          <GlobalHeader />
          {location.pathname === "/" && <Home />}
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default HomePage;
