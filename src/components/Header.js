import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import logo from "./../assets/images/logo.png";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll("a");
        links.forEach((link) => {
            link.addEventListener("click", () => {
                const mobileNav = document.querySelector(".mobile-nav");
                const mobileNavOverlay = document.querySelector(
                    ".mobile-nav-overlay"
                );
                mobileNav.classList.add("translate-minus-y");
                mobileNavOverlay.classList.remove("mobile-nav-overlay--open");
                setIsMobileMenuOpen(false)
            });
        });
    }, []);

    const toggleMobileMenu = () => {
        const mobileNav = document.querySelector(".mobile-nav");
        const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log(mobileNav);
        if (mobileNav.classList.contains("translate-minus-y")) {
            mobileNav.classList.remove("translate-minus-y");
            mobileNavOverlay.classList.add("mobile-nav-overlay--open");
        } else {
            mobileNav.classList.add("translate-minus-y");
            mobileNavOverlay.classList.remove("mobile-nav-overlay--open");
        }
    };

    return (
        <header className="header sticky z-99 top-0 bg-[#f5f5f5] text-black py-1 shadow">
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <Link to={"/"} className="font-semibold text-xl">
                        <img src={logo} alt="Logo" className="w-16" />
                    </Link>
                </div>
                <div className="header__nav hidden sm:flex">
                    <nav className="nav-menu">
                        <ul className="flex items-center gap-4 font-medium">
                            <li>
                                <Link to={"/"} className="hover:text-gray-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/catalog"}
                                    className="hover:text-gray-500"
                                >
                                    Catalog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/news"}
                                    className="hover:text-gray-500"
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/about-us"}
                                    className="hover:text-gray-500"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden sm:flex gap-4 items-center">
                    <Link to={"/login"}>
                        <FaUser size={"20px"} />
                    </Link>
                    <Link to={"/cart"}>
                        <FaCartShopping size={"20px"} />
                    </Link>
                </div>
                <button className="sm:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <FaTimes size={"20px"} />
                    ) : (
                        <FaBars size={"20px"} />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
