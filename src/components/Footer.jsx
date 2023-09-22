import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer__legal'>
                <span> © {currentYear} All rights reserved </span>
                <Link to='/cookies' >Cookies</Link>
            </div>
            <div className='footer__links'>
                <a className='fa-brands fa-github' target='_blank' rel='noreferrer' href='https://github.com/brianglezn'></a>
                <a className='fa-brands fa-linkedin' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/brianglezn/'></a>
                <a className='fa-brands fa-instagram' target='_blank' rel='noreferrer' href='https://www.instagram.com/brianglezn.es/'></a>
            </div>
        </footer>
    );
}

export default Footer;
