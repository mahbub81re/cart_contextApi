import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router";
import { CartContext } from "../features/cartContext";
import 'animate.css';

const Nav = () => {
		  const { cart } = useContext(CartContext);
         const badgeRef = useRef();
useEffect(() => {
   if (badgeRef.current) {
      badgeRef.current.classList.add("animate__animated", "animate__bounce" , "animate__repeat-2");

      const timer = setTimeout(() => {
        badgeRef.current.classList.remove("animate__animated", "animate__bounce" , "animate__repeat-2");
      }, 3000); 

      return () => clearTimeout(timer);
    }

}, [cart.length]);  



	return (
		<div className="p-5 max-md:p-2 bg-white flex justify-between w-full px-8 fixed top-0 z-20 shadow-md">
             <img src='/images/logo (3) (1).png' alt="Logo" className="mb-4 max-md:mt-4 max-md:ml-4  w-24 max-sm:w-20 max-md:h-8 " />
             <nav className='flex items-center gap-4 mx-md:gap-2'>
                <Link to="/" className="text-black font-semibold px-4 max-md:px-2 py-2 hover:bg-blue-400 hover:text-white rounded-md">Home</Link>
                <Link to="/about" className="text-black font-semibold px-4 max-md:px-2 py-2 hover:bg-blue-400 hover:text-white rounded-md">About</Link>
                <div className="relative     mr-5 ">
                  {cart.length>0 &&<span  ref={badgeRef} className="cart-item animate__animated animate__bounce text-black absolute text-white  font-semibold -top-5 max-md:top-0 max-md:-right-2 text-xs -right-2 bg-red-400 rounded-full px-3 max-md:px-[10px] max-md:py-1 py-[6px] cursor-pointer">
                     {cart.length}
                  </span>
                   }
                 <Link to="/cart" className="text-black font-semibold px-4 py-2 bg-blue-400 max-md:bg-white text-white rounded-md">
                 <span className=" md:hidden"> <img src="/images/icon.svg" className="w-6"/> </span> <span className=" max-md:hidden"> Go To Cart </span>
                 </Link>
                  </div>
                 </nav>
        </div>
	);
};

export default Nav;