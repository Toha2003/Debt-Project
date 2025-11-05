import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
