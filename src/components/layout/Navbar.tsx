import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <div className="logo"></div>
            <h1><em>Moeda</em> Fácil</h1>
        </div>
        
          <div className="Menu">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/conversor">Conversor</NavLink>
            <NavLink to="/historico">Histórico</NavLink>
          </div>
      
        <div>
            <button>Converter agora</button>
        </div>
    </nav>
  );
}