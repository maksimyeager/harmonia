import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import News from "./pages/News";

import ScrollToTop from "./utils/scrollToTop";

import guitar1 from "./assets/images/guitars/guitar-1.jpg";
import guitar2 from "./assets/images/guitars/guitar-2.jpg";
import guitar3 from "./assets/images/guitars/guitar-3.jpg";

const products = [
    {
        image: guitar1,
        name: "Cort B5 Element OPBR",
        price: "299",
        link: "/product/guitar",
    },
    {
        image: guitar2,
        name: "Cort B5 Element OPBR",
        price: "299",
        link: "/product/guitar",
    },
    {
        image: guitar3,
        name: "Cort B5 Element OPBR",
        price: "299",
        link: "/product/guitar",
    },
    {
        image: guitar1,
        name: "Cort B5 Element OPBR",
        price: "299",
        link: "/product/guitar",
    },
    {
        image: guitar2,
        name: "Cort B5 Element OPBR",
        price: "299",
        link: "/product/guitar",
    },
    {
        image: guitar3,
        name: "Cort B5 Element OPBR",
        price: "299",
        link: "/product/guitar",
    },
];

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about-us"} element={<AboutUs />} />
                    <Route path={"/catalog"} element={<Catalog products={products} />} />
                    <Route path={"/news"} element={<News />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
