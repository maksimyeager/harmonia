import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Header />
            
            {/* Основной контент */}
            <main className="main">
                <Outlet />
            </main>
            
            <Footer />
        </>
    );
};

export default Layout;
