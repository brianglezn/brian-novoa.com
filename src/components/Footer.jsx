import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
            <footer className="footer">
                <div className="legal">
                    <span> © {currentYear} All rights reserved </span>
                    <a href=''> Cookies </a>
                    <a href=''> Terms </a>
                    <a href=''> Privacy </a>
                </div>
                <div className="links">
                    <a className="fa-brands fa-github" href='https://github.com/brianglezn'></a>
                    <a className="fa-brands fa-linkedin" href='https://www.linkedin.com/in/brianglezn/'></a>
                    <a className="fa-brands fa-instagram" href='https://www.instagram.com/brianglezn.es/'></a>
                </div>
            </footer>
    );
}

export default Footer;
