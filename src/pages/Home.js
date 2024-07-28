import Banner from "../components/Banner";
import SwiperComponent from "../components/SwiperComponent";

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import electroGuitar1 from "../assets/images/guitars/electro-guitar-1.jpg";
import electroGuitar2 from "../assets/images/guitars/electro-guitar-2.jpg";
import electroGuitar3 from "../assets/images/guitars/electro-guitar-3.jpg";
import klassicGuitar1 from "../assets/images/guitars/klassic-guitar-1.jpg";
import klassicGuitar2 from "../assets/images/guitars/klassic-guitar-2.jpg";
import klassicGuitar3 from "../assets/images/guitars/klassic-guitar-3.jpg";
import acousticGuitar1 from "../assets/images/guitars/acoustic-guitar-1.jpg";
import acousticGuitar2 from "../assets/images/guitars/acoustic-guitar-2.jpg";
import acousticGuitar3 from "../assets/images/guitars/acoustic-guitar-3.jpg";
import basGuitar1 from "../assets/images/guitars/bas-guitar-1.jpg";
import basGuitar2 from "../assets/images/guitars/bas-guitar-2.jpg";
import basGuitar3 from "../assets/images/guitars/bas-guitar-3.jpg";

const products = [
    {
        id: 1,
        image: electroGuitar1,
        name: "Cort B5 Element OPBR",
        price: 980.00,
        type: "electric",
        color: "black",
        link: "/product/guitar",
    },
    {
        id: 2,
        image: electroGuitar2,
        name: "Cort B5 Element OPBR",
        price: 980.00,
        type: "electric",
        color: "black",
        link: "/product/guitar",
    },
    {
        id: 3,
        image: electroGuitar3,
        name: "Cort B5 Element OPBR",
        price: 980.00,
        type: "electric",
        color: "black",
        link: "/product/guitar",
    },
    {
        id: 4,
        image: klassicGuitar1,
        name: "Valencia VC203CSB",
        price: 140.00,
        type: "classical",
        color: "brown",
        link: "/product/guitar",
    },
    {
        id: 5,
        image: klassicGuitar2,
        name: "Valencia VC203TBU",
        price: 140.00,
        type: "classical",
        color: "blue",
        link: "/product/guitar",
    },
    {
        id: 6,
        image: klassicGuitar3,
        name: "Valencia VC203TWR",
        price: 140.00,
        type: "classical",
        color: "red",
        link: "/product/guitar",
    },
    {
        id: 7,
        image: acousticGuitar1,
        name: "Valencia Bromo BAT2CE",
        price: 390.00,
        type: "acoustic",
        color: "black",
        link: "/product/guitar",
    },
    {
        id: 8,
        image: acousticGuitar2,
        name: "Valencia Bromo BAT2M",
        price: 390.00,
        type: "acoustic",
        color: "brown",
        link: "/product/guitar",
    },
    {
        id: 9,
        image: acousticGuitar3,
        name: "Valencia Bromo BAA1",
        price: 290.00,
        type: "acoustic",
        color: "black",
        link: "/product/guitar",
    },
    {
        id: 10,
        image: basGuitar1,
        name: "Cort GB24JJ TBK",
        price: 580.00,
        type: "bass",
        color: "black",
        link: "/product/guitar",
    },
    {
        id: 11,
        image: basGuitar2,
        name: "Cort ACTION BASS PLUS TR",
        price: 530.00,
        type: "bass",
        color: "red",
        link: "/product/guitar",
    },
    {
        id: 12,
        image: basGuitar3,
        name: "Cort C4 Deluxe CBL",
        price: 780.00,
        type: "bass",
        color: "blue",
        link: "/product/guitar",
    },
];
const Home = () => {
    return (
        <>
            <Banner />
            <main className="py-10 px-8">
                <section className="mb-8">
                    <h1 className="title-1">New Models</h1>
                    <div className="swiper relative">
                        <SwiperComponent products={products} />
                    </div>
                </section>
                <section>
                    <h1 className="title-1">Recomendations</h1>
                    <div className="swiper relative">
                        <SwiperComponent products={products} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
