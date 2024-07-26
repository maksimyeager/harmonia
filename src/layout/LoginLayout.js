import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";

const LoginLayout = () => {
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
        </>
    );
};

export default LoginLayout;
