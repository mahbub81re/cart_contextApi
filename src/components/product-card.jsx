import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../features/cartContext";
import { ToastContext } from "../features/toastContext";

export default function ProductCard({ product, searchTerm = "" }) {
  const { addToCart } = useContext(CartContext);


  const shortDescription = product.description
    ? `${product.description.slice(0, 60)}...`
    : "No description available.";



   function  highlightMatch  (text, term)  {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="text-red-500">{part}</span>
      ) : (
        part
      )
    );
  };

   

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between relative hover:shadow-lg transition-transform transform hover:scale-105">
      
      <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
        ${product.price.toFixed(2)}
      </div>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">
          {highlightMatch(product.title, searchTerm)}
        </h3>
        <p className="text-gray-600 text-sm flex-grow">{shortDescription}</p>
      </div>

      <div className="p-4 pt-0 flex justify-between gap-2">
        <Link
          to={`/details/${product.id}`}
          className="bg-yellow-400 text-black text-sm font-semibold py-2 px-3 rounded hover:bg-yellow-500 transition"
        >
          DETAILS
        </Link>

        <button
          onClick={() =>  addToCart(product)}
          className="bg-green-500 text-sm text-white font-semibold py-2 px-3 rounded hover:bg-green-600 transition"
        >
          ADD TO CART
        </button>
      </div>

    
    </div>
  );
}
