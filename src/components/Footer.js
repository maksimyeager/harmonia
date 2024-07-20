import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-[#a58774] text-white py-6">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold">HARMONIA</h2>
                    <p className="text-sm mt-2">Discover the Harmony with Harmonia</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <nav className="footer-nav">
                        <ul className="flex flex-col md:flex-row gap-4 font-medium">
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
                <div className="flex flex-col items-center md:items-start">
                    <div className="mb-4 flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                    <div className="text-sm">
                        <p className="flex items-center"><FaPhoneAlt className="mr-2" />+123 456 7890</p>
                        <p className="flex items-center"><FaEnvelope className="mr-2" />info@harmonia.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;