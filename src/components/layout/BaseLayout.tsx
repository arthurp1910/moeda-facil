import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BaseLayout() {
  return (
    <><div className="appLayout">
      <Navbar />

      <main className="appMain">
        <Outlet />
      </main>

      <Footer />
      </div>
    </>
  );
}