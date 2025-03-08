// Importing styles
import './Footer.scss'

// Footer component that displays the logo and copyright information
export default function Footer() {
    return (
        <footer>
            <img src="/logo.png" alt="logo" className='logo' />
            <p>© Copyright 2020 - Brian G. Novoa </p>
        </footer>
    )
}
