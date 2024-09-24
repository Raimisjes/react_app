
import './Header.scss'; 
import reactLogo from '../../assets/logo.svg'
import Drawer from './components/Drawer/Drawer'

const Header = () => {
  return (
    <header className="header">
        <div className='left-side'>
            <a className="logo" href="/">
                <img src={reactLogo} alt="Logo" />
            </a>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About Us</a>
            </nav>
        </div>
        <button className="btn-primary login">Login / Sign Up</button>
        <Drawer />
    </header>
  );
};

export default Header;
