import githubLogo from "../../assets/Github.svg";
import emailLogo from "../../assets/Email.svg";
import linkedinLogo from "../../assets/Linkedln.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerCentral">© 2026 Moeda Fácil</div>

      <div className="footerDesenvolvido">Desenvolvido por Arthur Lemes</div>

      <div className="footerLinks">
        <a href="https://github.com/arthurp1910">
          <img src={githubLogo} alt="GitHub" width="30" height="30" />
        </a>
        <a href="mailto:lemesarthurr@gmail.com?subject=Assunto&body=Mensagem">
          <img src={emailLogo} alt="Email" width="30" height="30" />
        </a>
        <a href="https://www.linkedin.com/in/arthur-lemes-58b69926a">
          <img src={linkedinLogo} alt="LinkedIn" width="30" height="30" />
        </a>
      </div>
    </footer>
  );
}
