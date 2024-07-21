import { Link } from "react-router-dom";

import { FaCar, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import logo from "./../assets/images/logo.png"

const Header = () => {
    return (
        <header className="header sticky z-50 top-0 bg-[#f5f5f5] text-black py-1 shadow">
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <Link to={"/"} className="font-semibold text-xl"></Link>
                    <img src={logo} alt="" className="w-16"/>
                </div>
                <div className="header__nav">
                    <nav className="nav-menu">
                        <ul className="flex items-center gap-4 font-medium ">
                            <li>
                                <Link to={"/"} className="hover:text-gray-500">Home</Link>
                            </li>
                            <li>
                                <Link to={"/catalog"} className="hover:text-gray-500">Catalog</Link>
                            </li>
                            <li>
                                <Link to={"/news"} className="hover:text-gray-500">News</Link>
                            </li>
                            <li>
                                <Link to={"/about-us"} className="hover:text-gray-500">About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-4 items-center">
                    <Link to={"/login"}>
                        <FaUser size={"20px"}/>
                    </Link>
                    <Link to={"/cart"}>
                        <FaCartShopping size={"20px"}/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
