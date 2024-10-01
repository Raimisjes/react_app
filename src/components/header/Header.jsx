
import './Header.scss'; 
import reactLogo from '../../assets/logo.svg'
import Drawer from './components/Drawer/Drawer'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <header className="header">
        <div className='left-side'>
          <Link to={`/`} className="logo">
            <img src={reactLogo} alt="Logo" />
          </Link>
          <nav className="nav-links">
            <Link to={`/`}>Home</Link>
            <Link to={`/services`}>Services</Link>
            <Link to={`/aboutus`}>About us</Link>
          </nav>
        </div>
        <button className="btn-primary login" onClick={handleClick}>Login / Sign Up</button>
        <Drawer />
    </header>
  );
};

export default Header;
