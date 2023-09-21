import { useEffect } from 'react';

import './Header.css';

function Header() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const scrollToTopButton = document.getElementById('scrollToTopButton');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    }, []);

    return (
        <header className='header'>

            <div className='header__navbar'>
                <ul className='header__navbar-list'>
                    <li><a href='#projects'>Proyectos</a></li>
                    <li><a href='#services'>Servicios</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                </ul>
            </div>
            <button className='fa-solid fa-chevron-up' id='scrollToTopButton' onClick={scrollToTop}></button>
        </header>
    )
}

export default Header