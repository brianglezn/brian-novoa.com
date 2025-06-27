import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Importing styles
import "./Header.scss";

// Importing icons
import { FaLinkedin, FaGithub, FaInstagram, FaComment } from "react-icons/fa";

// Importing logo
import logoImg from "../assets/img/B.png";

// Main component
export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`headerContainer ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className="icon-button logo-button" title="Home">
          <img src={logoImg} alt="Logo" className="logo" />
        </a>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/brianglezn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/brianglezn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/brian.developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <a
          href="mailto:brian@brian-novoa.com"
          className="icon-button contact-button"
          title={t("Header.contact")}
        >
          <FaComment />
        </a>
      </div>
    </header>
  );
}
