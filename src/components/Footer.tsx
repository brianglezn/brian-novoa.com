import './Footer.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <img src="/logo.png" alt="logo" className='logo' />
            <p>© Copyright {currentYear} - Brian G. Novoa </p>
        </footer>
    )
}
