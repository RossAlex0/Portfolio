import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ButtonLink from "./components/ButtonLink/ButtonLink";
import NavBurger from "./components/Burger/NavBurger";

import "./style/app.css";
import useScreenWidth from "./services/hook/useScreenWodth";

function App() {
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth < 900 ? (
        <NavBurger />
      ) : (
        <>
          <Navbar />
          <div className="nav_desktop_link">
            <ButtonLink />
          </div>
        </>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
