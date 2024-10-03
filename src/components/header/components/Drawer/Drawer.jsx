import { useState } from 'react';
import './Drawer.scss';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from '../../../../store/useUserStore';
import { IoIosLogOut } from "react-icons/io";

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

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
        <>
            <button className="btn-primary toggle-drawer" onClick={toggleDrawer}><AiOutlineMenu /></button>

            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                <a href="#" className="close-btn" onClick={toggleDrawer}>
                    <AiOutlineClose />
                </a>
                {userStatus == 'logged' ? 
                    <div className='logged-in-block'>
                        <span className='email'>{userEmail}</span>
                        <IoIosLogOut title="Logout" onClick={headerLogout} />
                    </div> : 
                    <Link to={`/login`}>Login / Sign Up</Link>} 
                <Link to={`/`}>Home</Link>
                <Link to={`/services`}>Services</Link>
                <Link to={`/aboutus`}>About us</Link>
            </div>
        </>
    );
};

export default Drawer;
