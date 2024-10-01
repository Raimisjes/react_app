import { useState } from 'react';
import './Drawer.scss';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="btn-primary toggle-drawer" onClick={toggleDrawer}><AiOutlineMenu /></button>

            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                <a href="#" className="close-btn" onClick={toggleDrawer}>
                    <AiOutlineClose />
                </a>
                <Link to={`/login`}>Login / Sign Up</Link>
                <Link to={`/`}>Home</Link>
                <Link to={`/services`}>Services</Link>
                <Link to={`/aboutus`}>About us</Link>
            </div>
        </>
    );
};

export default Drawer;
