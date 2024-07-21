import React, { useState } from 'react';
import ProductCard from './../components/ProductCard'; // Assuming you have a ProductCard component
import { FaBars, FaTimes } from 'react-icons/fa'; // For toggle icons

const Catalog = ({ products }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [price, setPrice] = useState(1000);
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [search, setSearch] = useState('');

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const filteredProducts = products.filter(product => 
        (product.price <= price) &&
        (type === '' || product.type === type) &&
        (color === '' || product.color === color) &&
        (product.name.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="flex">
            <button 
                onClick={handleSidebarToggle} 
                className="md:hidden p-4">
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`fixed inset-y-0 left-0 bg-white w-64 p-6 z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
                <h2 className="text-2xl font-bold mb-4">Sort Guitars</h2>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 font-medium">Price: ${price}</label>
                    <input 
                        type="range" 
                        id="price" 
                        min="100" 
                        max="5000" 
                        value={price} 
                        onChange={e => setPrice(e.target.value)} 
                        className="w-full" 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block mb-2 font-medium">Type</label>
                    <select 
                        id="type" 
                        value={type} 
                        onChange={e => setType(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded">
                        <option value="">All</option>
                        <option value="classical">Classical</option>
                        <option value="acoustic">Acoustic</option>
                        <option value="electric">Electric</option>
                        <option value="bass">Bass</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="color" className="block mb-2 font-medium">Color</label>
                    <select 
                        id="color" 
                        value={color} 
                        onChange={e => setColor(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded">
                        <option value="">All</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="search" className="block mb-2 font-medium">Search</label>
                    <input 
                        type="text" 
                        id="search" 
                        value={search} 
                        onChange={e => setSearch(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded" 
                        placeholder="Search for guitars..."
                    />
                </div>
            </div>
            <div className="flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
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
