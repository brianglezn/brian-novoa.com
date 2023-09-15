import './Header.css';

function Header() {

    return (
        <header className="header">
            <div className="header-list">
                <ul className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Proyecto</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className="header-butons">
                <a className="fa-solid fa-house" href='/'></a>
                <a className="fa-solid fa-folder-tree" href='#projects'></a>
                <a className="fa-solid fa-tag" href='#services'></a>
                <a className="fa-solid fa-phone fa-flip-horizontal" href='#contact'></a>
            </div>
        </header>
    )
}

export default Header