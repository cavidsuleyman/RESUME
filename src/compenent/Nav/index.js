import "./style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Nav() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a href="#">Portfolio.</a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div className="cancel-btn">
            <i className="fas fa-times"></i>
          </div>
        </ul>
      <div className="res">
        <div className="media-icons">
          <a href="#">
            <FaFacebookF color="white"/>
          </a>
          <a href="https://www.linkedin.com/in/suleymanov-cavid-325048221/">
            <FaLinkedin color="white"/>
          </a>
          <a href="https://github.com/cavidsuleyman">
            <FaGithub color="white"/>
          </a>
        </div>
      </div>
      </div>
      <div className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}
export default Nav;
