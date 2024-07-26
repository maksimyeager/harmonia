import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
            <p className="text-2xl font-semibold">{product.price.toFixed(2)} ₼</p>
        </div>
    );
};

export default ProductDetails;
