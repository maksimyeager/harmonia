import Banner from "../components/Banner";
import SwiperComponent from "../components/SwiperComponent";

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


import guitar1 from "../assets/images/guitars/guitar-1.jpg";
import guitar2 from "../assets/images/guitars/guitar-2.jpg";
import guitar3 from "../assets/images/guitars/guitar-3.jpg";


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

const Home = () => {
    return (
        <>
            <Banner />
            <div className="swiper relative">
                <SwiperComponent products={products} />
                <div>
                    <button id="prev" className="absolute top-1/2 left-0 l-0 z-50 p-4 rounded-full hover:bg-[#c1c0c0]"><GrFormPrevious size={"28px"}/></button>
                    <button id="next" className="absolute top-1/2 right-0 l-0 z-50 p-4 rounded-full hover:bg-[#c1c0c0]"><GrFormNext size={"28px"}/></button>
                </div>
            </div>
        </>
    );
};

export default Home;
