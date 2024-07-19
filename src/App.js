import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import News from "./pages/News";

import ScrollToTop from "./utils/scrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about-us"} element={<AboutUs />} />
                    <Route path={"/catalog"} element={<Catalog />} />
                    <Route path={"/news"} element={<News />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
