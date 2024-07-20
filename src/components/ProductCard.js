import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, link }) => {
    return (
        <div className="bg-white verflow-hidden border border-solid border-[#e5e5e5]">
            <div className="w-full h-48 relative">
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-lg text-gray-700 mb-4 font-semibold">{price}{" "}₼</p>
            </div>
        </div>
    );
};

export default ProductCard;
