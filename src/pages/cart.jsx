import React, { Fragment, useContext } from "react";
import CartItem from "../components/cart-item";
import { CartContext } from "../features/cartContext";
import { Link } from "react-router";
import { ToastContext } from "../features/toastContext";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Fragment>
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6  ">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <Fragment>
            <div className="overflow-x-auto ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Title
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subtotal
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cart.map((item) => (
                    <CartItem item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Total Price:{" "}
                <span className="text-yellow-500">${totalPrice.toFixed(2)}</span>
              </h3>

              <button
                onClick={clearCart}
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow transition"
              >
                Clear Cart
              </button>
            </div>
            </Fragment>
        )}
        </div>
        <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline m-4"> {'<- Back to Home'}</Link>
    </Fragment>
  );
};

export default Cart;
