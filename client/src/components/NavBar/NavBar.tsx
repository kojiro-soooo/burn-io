import navIcon from "../../assets/menu_icon.png";
import "./NavBar.scss"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <img className="navbar__icon" src={navIcon}></img>
            </div>
        </nav>
    );
};

export default NavBar;
