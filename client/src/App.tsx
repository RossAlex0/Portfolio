import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import "./style/app.css";
import ButtonLink from "./components/ButtonLink/ButtonLink";

function App() {
  return (
    <>
      <Navbar />
      <ButtonLink />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
