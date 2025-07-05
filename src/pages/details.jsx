import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../features/cartContext";
import Toast from "../components/toast";
import NotFoundPage from "./not-found-page";

function Details() {
  const [product, setProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      if (data) {
        setProduct(data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      const productToCart = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      addToCart(productToCart);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 relative">
        
        <Toast
          message={`${product ? product.title : "Product"}`}
            show={showToast && showToast}
            className="fixed top-4 right-4 z-50"
        />
    

      {product ? (
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 sm:h-80 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-gray-800">{product.title}</h2>
              <p className="mb-2 text-gray-600">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="mb-4 text-gray-600 leading-relaxed text-justify">
                {product.description}
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-xl font-semibold text-gray-700">
                Price: $ {product.price.toFixed(2)}
              </span>
              <button
                onClick={()=>handleAddToCart(product)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow transition"
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Loading product details...</p>
      )}

        <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline m-4"> {'<- Back to Home'}</Link>

    </div>
  );
}

export default Details;
