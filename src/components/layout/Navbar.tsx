import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Frame34.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <div className="logo"></div>
              <img src={logo} alt="Logo" width="200" height="100" />
        </div>
        
          <div className="menu">
            <NavLink
              to="/conversor" className={({ isActive }) => isActive ? "menuLink ativo" : "menuLink"}>
              Conversor
            </NavLink>

            <NavLink to="/" className={({ isActive }) => isActive ? "menuLink ativo" : "menuLink"}>
              Cotações
            </NavLink>

            <NavLink to="/historico" className={({ isActive }) => isActive ? "menuLink ativo" : "menuLink"}>
              Histórico
            </NavLink>
          </div>
    </nav>
  );
}