/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../features/cartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value) || 1;
    if (value < 1) value = 1;
    updateQuantity(item.id, value);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <tr className="bg-white hover:bg-gray-50 transition">
      <td className="px-4 py-3">
        <img
          src={item.image}
          alt={item.title}
          className="h-16 w-16 object-cover rounded"
        />
      </td>
      <td className="px-4 py-3 text-gray-700 font-medium">{item.title}</td>
      <td className="px-4 py-3 text-right text-gray-600">${item.price.toFixed(2)}</td>
      <td className="px-4 py-3 text-center">
        <div className="inline-flex items-center border rounded-md overflow-hidden">
          <button
            onClick={handleDecrease}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
            type="button"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleInputChange}
            className="w-12 text-center border-x border-gray-300 focus:outline-none"
          />
          <button
            onClick={handleIncrease}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
            type="button"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-4 py-3 text-right font-semibold text-gray-800">
        ${(item.price * item.quantity).toFixed(2)}
      </td>
      <td className="px-4 py-3 text-center">
        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-800 font-bold text-xl"
          aria-label={`Remove ${item.title} from cart`}
        >
          &times;
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
