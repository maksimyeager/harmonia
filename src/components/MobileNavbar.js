import { useState } from "react";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const MobileNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div
                className="mobile-nav-overlay"
            ></div>
            <nav
                className="mobile-nav flex flex-col justify-center h-max fixed z-98 w-full
             bg-[#f5f5f5] text-black transition-transform
              duration-300 ease-in-out translate-minus-y sm:hidden"
            >
                <ul className="flex flex-col items-center font-medium w-full">
                    <li>
                        <Link
                            to={"/"}
                            className="hover:text-gray-500"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/catalog"}
                            className="hover:text-gray-500"
                            onClick={toggleMobileMenu}
                        >
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/news"}
                            className="hover:text-gray-500"
                            onClick={toggleMobileMenu}
                        >
                            News
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/about-us"}
                            className="hover:text-gray-500"
                            onClick={toggleMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="flex gap-4">
                        <Link
                            to={"/login"}
                            className="hover:text-gray-500"
                            onClick={toggleMobileMenu}
                        >
                            <FaUser size={"20px"} />
                        </Link>
                        <Link
                            to={"/cart"}
                            className="hover:text-gray-500"
                            onClick={toggleMobileMenu}
                        >
                            <FaCartShopping size={"20px"} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default MobileNavbar;
