import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import "./style/app.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
