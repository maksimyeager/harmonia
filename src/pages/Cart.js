import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    if (cartItems.length === 0) {
        return <div className="container py-6">Your cart is empty</div>;
    }

    return (
        <div className="container py-6">
            <h1 className="title-1">Cart</h1>
            <ul className="grid gap-4 border border-gray-300 border-solid rounded p-8 mb-4">
                {cartItems.map(item => (
                    <li key={item.id} className="flex sm:flex-row flex-col justify-between md:items-center gap-4 border border-gray-300 border-solid rounded p-8">
                        <div className='flex flex-col gap-2'>
                            <div className="w-24 h-24 border border-gray-300 border-solid">
                                <img src={item.image} alt={`Guitar ${item.name}`} className="w-full"/>
                            </div>
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-lg font-medium">{item.price.toFixed(2)} ₼</p>
                        </div>
                        <button 
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button 
                className="w-60 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
                onClick={clearCart}
            >
                Clear Cart
            </button>
            <div className="mt-4">
                <Link to="/checkout" className="block w-60 text-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
