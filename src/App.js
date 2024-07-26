import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import News from "./pages/News";
import ProductDetails from "./pages/ProductDetails"; // Импортируем компонент деталей продукта
import ScrollToTop from "./utils/scrollToTop";

import electroGuitar1 from "./assets/images/guitars/electro-guitar-1.jpg";
import electroGuitar2 from "./assets/images/guitars/electro-guitar-2.jpg";
import electroGuitar3 from "./assets/images/guitars/electro-guitar-3.jpg";
import klassicGuitar1 from "./assets/images/guitars/klassic-guitar-1.jpg";
import klassicGuitar2 from "./assets/images/guitars/klassic-guitar-2.jpg";
import klassicGuitar3 from "./assets/images/guitars/klassic-guitar-3.jpg";
import acousticGuitar1 from "./assets/images/guitars/acoustic-guitar-1.jpg";
import acousticGuitar2 from "./assets/images/guitars/acoustic-guitar-2.jpg";
import acousticGuitar3 from "./assets/images/guitars/acoustic-guitar-3.jpg";
import basGuitar1 from "./assets/images/guitars/bas-guitar-1.jpg";
import basGuitar2 from "./assets/images/guitars/bas-guitar-2.jpg";
import basGuitar3 from "./assets/images/guitars/bas-guitar-3.jpg";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoginLayout from "./layout/LoginLayout";

const products = [
    {
        id: 1,
        image: electroGuitar1,
        name: "Cort B5 Element OPBR",
        price: 980.0,
        type: "electric",
        color: "white",
    },
    {
        id: 2,
        image: electroGuitar2,
        name: "Cort B5 Element OPBR",
        price: 980.0,
        type: "electric",
        color: "black",
    },
    {
        id: 3,
        image: electroGuitar3,
        name: "Cort B5 Element OPBR",
        price: 980.0,
        type: "electric",
        color: "red",
    },
    {
        id: 4,
        image: klassicGuitar1,
        name: "Valencia VC203CSB",
        price: 140.0,
        type: "classical",
        color: "brown",
    },
    {
        id: 5,
        image: klassicGuitar2,
        name: "Valencia VC203TBU",
        price: 140.0,
        type: "classical",
        color: "black",
    },
    {
        id: 6,
        image: klassicGuitar3,
        name: "Valencia VC203TWR",
        price: 140.0,
        type: "classical",
        color: "red",
    },
    {
        id: 7,
        image: acousticGuitar1,
        name: "Valencia Bromo BAT2CE",
        price: 390.0,
        type: "acoustic",
        color: "white",
    },
    {
        id: 8,
        image: acousticGuitar2,
        name: "Valencia Bromo BAT2M",
        price: 390.0,
        type: "acoustic",
        color: "brown",
    },
    {
        id: 9,
        image: acousticGuitar3,
        name: "Valencia Bromo BAA1",
        price: 290.0,
        type: "acoustic",
        color: "white",
    },
    {
        id: 10,
        image: basGuitar1,
        name: "Cort GB24JJ TBK",
        price: 580.0,
        type: "bass",
        color: "black",
    },
    {
        id: 11,
        image: basGuitar2,
        name: "Cort ACTION BASS PLUS TR",
        price: 530.0,
        type: "bass",
        color: "red",
    },
    {
        id: 12,
        image: basGuitar3,
        name: "Cort C4 Deluxe CBL",
        price: 780.0,
        type: "bass",
        color: "brown",
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
                    <Route
                        path={"/catalog"}
                        element={<Catalog products={products} />}
                    />
                    <Route path={"/news"} element={<News />} />
                    <Route
                        path={"/product/:id"}
                        element={<ProductDetails products={products} />}
                    />
                </Route>
                <Route path={"/"} element={<LoginLayout/>}>
                    <Route path={"/login"} element={<LoginPage />} />
                    <Route path={"/register"} element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
