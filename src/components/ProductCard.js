import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price }) => {
    return (
        <div key={id} className="bg-white border border-solid border-[#e5e5e5] h-auto ">
            <div className="card-image w-full relative overflow-hidden">
                <Link to={`/product/${id}`} className="absolute top-0 bottom-0 left-0 right-0 z-10"></Link>
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full object-cover"
                />
            </div>

            <div className="p-4">
                <Link to={`/product/${id}`} className="block text-lg md:text-xl font-bold mb-2 hover:underline">{name}</Link>
                <p className="text-base md:text-lg text-gray-700 mb-4 font-semibold">{price.toFixed(2)} ₼</p>
            </div>
        </div>
    );
};

export default ProductCard;
