import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container p-6">
            <div className="flex flex-col sm:flex-row md:justify-between sm:gap-10 gap-4">
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product.name}</h1>
                    <div className="max-w-80 max-h-80 md:max-w-96 md:max-h-96 flex justify-center items-center border border-gray-300 border-solid">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" style={{ aspectRatio: '1' }} />
                    </div>
                </div>
                <div className="mt-0 sm:mt-16 sm:w-80 w-full">
                    <p className="text-2xl font-semibold mb-4 p-4 border border-gray-500 border-solid">{product.price.toFixed(2)} ₼</p>
                    <button 
                        className="w-full bg-[#451614] text-white text-lg font-medium py-2 px-4 hover:bg-[#755C48] transition duration-200"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
