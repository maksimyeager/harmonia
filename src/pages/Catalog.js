import React, { useState } from "react";
import ProductCard from "./../components/ProductCard"; // Assuming you have a ProductCard component
import { FaBars, FaTimes } from "react-icons/fa"; // For toggle icons

const Catalog = ({ products }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [price, setPrice] = useState(980);
    const [types, setTypes] = useState([]);
    const [colors, setColors] = useState([]);
    const [search, setSearch] = useState("");

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleTypeChange = (e) => {
        const value = e.target.value;
        setTypes(
            types.includes(value)
                ? types.filter((type) => type !== value)
                : [...types, value]
        );
    };

    const handleColorChange = (e) => {
        const value = e.target.value;
        setColors(
            colors.includes(value)
                ? colors.filter((color) => color !== value)
                : [...colors, value]
        );
    };

    const filteredProducts = products.filter(
        (product) =>
            product.price <= price &&
            (types.length === 0 || types.includes(product.type)) &&
            (colors.length === 0 || colors.includes(product.color)) &&
            product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col md:flex-row pt-4 md:pt-0">
            <div className="flex px-6 justify-center">
                <button
                    onClick={handleSidebarToggle}
                    className="md:hidden py-1.5 px-2 flex items-center justify-center w-max border-2 border-solid rounded"
                >
                    <FaBars />
                    <span className="ml-2">Open Filters</span>
                </button>
            </div>
            <div
                className={`fixed top-0 left-0 bg-white w-full md:w-64 z-99 md:z-40 h-full p-6 transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 md:relative md:translate-x-0`}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Sort Guitars</h2>
                    <button onClick={handleSidebarToggle} className="md:hidden">
                        <FaTimes />
                    </button>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 font-medium">
                        Price: ${price}
                    </label>
                    <input
                        type="range"
                        id="price"
                        min="140"
                        max="980"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block mb-2 font-medium">
                        Type
                    </label>
                    <div className="flex flex-col">
                        {["classical", "acoustic", "electric", "bass"].map(
                            (type, index) => (
                                <label
                                    key={index}
                                    className="inline-flex items-center mt-2"
                                >
                                    <input
                                        type="checkbox"
                                        value={type}
                                        checked={types.includes(type)}
                                        onChange={handleTypeChange}
                                        className="form-checkbox h-5 w-5"
                                    />
                                    <span className="ml-2">
                                        {type.charAt(0).toUpperCase() +
                                            type.slice(1)}
                                    </span>
                                </label>
                            )
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="color" className="block mb-2 font-medium">
                        Color
                    </label>
                    <div className="flex flex-col">
                        {["black", "white", "brown", "red"].map(
                            (color, index) => (
                                <label
                                    key={index}
                                    className="inline-flex items-center mt-2"
                                >
                                    <input
                                        type="checkbox"
                                        value={color}
                                        checked={colors.includes(color)}
                                        onChange={handleColorChange}
                                        className="form-checkbox h-5 w-5"
                                    />
                                    <span className="ml-2">
                                        {color.charAt(0).toUpperCase() +
                                            color.slice(1)}
                                    </span>
                                </label>
                            )
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="search" className="block mb-2 font-medium">
                        Search
                    </label>
                    <input
                        type="text"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 border border-solid border-black rounded"
                        placeholder="Search for guitars..."
                    />
                </div>
            </div>
            <div className="flex-1 p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            link={product.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
