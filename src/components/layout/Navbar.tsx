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
            <NavLink to="/conversor">Conversor</NavLink>
            <NavLink to="/">Cotacoes</NavLink>
            <NavLink to="/historico">Histórico</NavLink>
          </div>
    </nav>
  );
}