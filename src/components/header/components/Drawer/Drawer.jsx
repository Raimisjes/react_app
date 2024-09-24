import { useState } from 'react';
import './Drawer.scss';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
                <a href="#login">Login / Sign Up</a>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About Us</a>
            </div>
        </>
    );
};

export default Drawer;
