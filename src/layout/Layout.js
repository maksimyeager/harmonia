import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";

const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Header />
            <MobileNavbar/>
            <main className="main">
                <Outlet />
            </main>
            
            <Footer />
        </>
    );
};

export default Layout;
