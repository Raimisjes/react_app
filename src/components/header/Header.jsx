
import './Header.scss'; 
import reactLogo from '../../assets/logo.svg'
import Drawer from './components/Drawer/Drawer'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUserStore from '../../store/useUserStore';
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  const {
    userEmail,
    userStatus,
    logout,
  } = useUserStore();

  const headerLogout = function() {
    logout();
    navigate('/');
  }

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
      {userStatus == 'logged' ? 
        <div className='logged-in-block'>
          <span className='email'>{userEmail}</span>
          <IoIosLogOut title="Logout" onClick={headerLogout} />
        </div> : 
        <button className="btn-primary login" onClick={handleClick}>Login / Sign Up</button>}    
      <Drawer />
    </header>
  );
};

export default Header;
