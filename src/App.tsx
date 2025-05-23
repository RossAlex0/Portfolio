import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar/Navbar";
import ButtonLink from "./components/ButtonLink/ButtonLink";
import NavBurger from "./components/Burger/NavBurger";

import useScreenWidth from "./services/hook/useScreenWodth";
import { LanguageProvider } from "./services/context/languageContext";

import "./style/app.css";

export default function App() {
  const screenWidth = useScreenWidth();

  return (
    <>
      <LanguageProvider>
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
        <SpeedInsights />
      </LanguageProvider>
    </>
  );
}
