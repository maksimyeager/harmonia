import { Link } from "react-router-dom";

import { FaCar, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="header sticky top-0 bg-[#a58774] text-white py-4">
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <Link to={"/"} className="font-semibold text-xl">HARMONIA</Link>
                </div>
                <div className="header__nav">
                    <nav className="nav-menu">
                        <ul className="flex items-center gap-4 font-medium ">
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/catalog"}>Catalog</Link>
                            </li>
                            <li>
                                <Link to={"/news"}>News</Link>
                            </li>
                            <li>
                                <Link to={"/about-us"}>About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-4 items-center">
                    <Link to={"/login"}>
                        <FaUser />
                    </Link>
                    <Link to={"/cart"}>
                        <FaCartShopping />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
