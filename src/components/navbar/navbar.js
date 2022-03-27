import './navbar.css'
import {CgProfile } from 'react-icons/cg';
import {AiOutlineClockCircle } from 'react-icons/ai';
import {BsSearch } from 'react-icons/bs';
import {VscThreeBars } from 'react-icons/vsc';




const Navbar = ({openSidebar, sidebarOpen}) => {
    return (
        <nav className="navbar" >
            <div className="nav_icon" onClick={()=> openSidebar()}>
                <VscThreeBars/>
            </div>
            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuarios</a>
                <a href="#" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
            <a href="#">
                <BsSearch/>

            </a>
            <a href="#">
                <AiOutlineClockCircle/>
            </a>

            <a href="#">
                <CgProfile/>
            </a>
            </div>
        </nav>
    )
}

export default Navbar