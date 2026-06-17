import githubLogo from "../../assets/Github.svg";
import emailLogo from "../../assets/Email.svg";
import linkedinLogo from "../../assets/Linkedln.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerCentral">
        © 2026 Moeda Fácil 
      </div>

      <div className="footerDesenvolvido">
        Desenvolvido por Arthur Lemes
      </div>

      <div className="footerLinks">
        <img src={githubLogo} alt="GitHub" width="30" height="30" />
        <img src={emailLogo} alt="Email" width="30" height="30" />
        <img src={linkedinLogo} alt="LinkedIn" width="30" height="30" />
      </div>

    </footer>
  );
}                             