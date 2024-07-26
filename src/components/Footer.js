import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import logo from "./../assets/images/logo.png";

const Footer = () => {
    return (
        <footer className="footer bg-[#f5f5f5] text-black pt-6">
            <div>
                <div className="container mx-auto flex flex-col md:flex-row md:justify-between pb-10">
                    <div className="mb-4 md:mb-0">
                        <img src={logo} alt="" className="w-32 m-auto" />
                        <p className="text-base sm:text-lg mt-2 font-bold text-center">
                            Discover the Harmony with Harmonia
                        </p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <nav className="footer-nav">
                            <ul className="flex flex-col gap-4 font-medium">
                                <li>
                                    <Link
                                        to={"/"}
                                        className="hover:text-gray-500"
                                    >
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
                    <div className="flex flex-col items-start">
                        <div className="mb-4 flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook size={"24px"}/>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter size={"24px"}/>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={"24px"}/>
                            </a>
                        </div>
                        <div className="text-sm flex flex-col gap-2">
                            <a href="tel:+123456789" className="flex items-center text-base">
                                <FaPhoneAlt size={"16px"} className="mr-2 font-medium" />
                                +123 456 7890
                            </a>
                            <a href="mailto:info@harmonia.com" className="flex items-center text-base">
                                <FaEnvelope size={"16px"} className="mr-2 font-medium" />
                                info@harmonia.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container py-10 ">
                        <p>Copyright © 2024. Harmonia.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
