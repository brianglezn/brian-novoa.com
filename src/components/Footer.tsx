// Importing styles
import "./Footer.scss";

// Footer component that displays the logo and copyright information
export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <img src="/logo.png" alt="logo" className="logo" />
      </div>
      <p>© Copyright 2020 - Brian G. Novoa </p>
    </footer>
  );
}
