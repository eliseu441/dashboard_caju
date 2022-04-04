import './Sidebar.css';
import logo from '../../assets/logo.jpeg';
import {MdFastfood, MdDirectionsCar, MdOutlineBook, MdHealthAndSafety, MdOutlineMenuBook } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Sidebar = ({sidebarOpen, closeSidebar}) =>{
    // const ref = useDetectClickOutside({ onTriggered: closeSidebar ref={ref}});
    return (
            <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar" >
                <div className="sidebar__title">
                    <div className="sidebar__img">
                        <img src={logo} alt="logo" height="200" width="200" />
                        <h1> CAJUZIN </h1>
                    </div>
                    <i
                    
                    id= "sidebaricon"
                    aria-hidden="true"
                    ></i>
                </div>
                <div className="sidebar__menu">
                        <div className="sidebar__link active_menu_link" >
                            <Link to="/" onClick={() => closeSidebar()}>Home</Link>
                        </div>
                        <h2>Enviar saldo de:</h2>
                        <div className="sidebar__link" >
                            <MdFastfood/>
                            <Link to="/refeicao" onClick={() => closeSidebar()}>Refeicao</Link>
                        </div>
                        <div className="sidebar__link">
                            <MdDirectionsCar/>
                            <Link to="/mobilidade" onClick={() => closeSidebar()}>Mobilidade</Link>
                        </div>
                        <div className="sidebar__link">
                            <MdOutlineBook/>
                            <Link to="/cultura" onClick={() => closeSidebar()}>Cultura</Link>
                        </div>
                        <div className="sidebar__link">
                            <MdHealthAndSafety/>
                            <Link to="/saude" onClick={() => closeSidebar()}>Saude</Link>
                        </div>
                        <div className="sidebar__link">
                            <MdOutlineMenuBook/>
                            <Link to="/educacao" onClick={() => closeSidebar()}>Educação</Link>
                        </div>
                        <h2>PESSOAS</h2>
                        <div className="sidebar__link">
                            <a href="#">Admnins</a>
                        </div>
                        <div className="sidebar__link">
                            <a href="#">Usuarios</a>
                        </div> 
                        <div className="sidebar__logout">
                            <a href="#">Log out</a>
                        </div>`
                </div>
            </div>
    )
}

export default Sidebar;