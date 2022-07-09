import React from 'react'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>

      <a href="https://github.com/oArthurCandido" target="blank"><FiGithub /> Github</a>
      <a href="https://www.linkedin.com/in/arthurcandido" target="blank"><FiLinkedin />  Linkedin</a>
      <p>Desenvolvido por <strong>Arthur Candido </strong><br /> Seguindo orientações de Matheus Battisti - Hora de Codar</p>

    </div>
  )
}

export default Footer