import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footerItemBox" id="socialIcons">
        <a
          className="socialIcon"
          href="https://github.com/oArthurCandido"
          target="blank"
        >
          <FiGithub /> Github
        </a>
        <a
          className="socialIcon"
          href="https://www.linkedin.com/in/arthurcandido"
          target="blank"
        >
          <FiLinkedin /> Linkedin
        </a>
      </div>
      <div id="bottomLinks">
        <p className="refLink footerItemBox">
          Desenvolvido por{" "}
          <strong>
            <a href="https://www.arthurcandido.dev/" target="_blank">
              Arthur Candido
            </a>{" "}
          </strong>
        </p>
        <p className="refLink footerItemBox">
          Seguindo orientações de{" "}
          <a href="https://horadecodar.com.br/" target="_blank">
            Matheus Battisti - Hora de Codar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
