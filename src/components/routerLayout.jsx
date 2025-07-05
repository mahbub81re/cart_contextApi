import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router";
import { CartContext } from "../features/cartContext";


export default function RootLayout() {
	  const { cart } = useContext(CartContext);
	

	return (
		<Fragment>
			<div className="p-5 bg-white flex justify-between w-full px-8 fixed top-0 z-20 shadow-md">
             <img src='/images/logo (3) (1).png' alt="Logo" className="mb-4 w-24" />
             <nav className='flex items-center gap-4'>
                <Link to="/" className="text-black font-semibold px-4 py-2 hover:bg-blue-400 hover:text-white rounded-md">Home</Link>
                <Link to="/about" className="text-black font-semibold px-4 py-2 hover:bg-blue-400 hover:text-white rounded-md">About</Link>
                <div className="inline-block relative">
                  {cart.length>0 &&<span className="text-black absolute text-white  font-semibold -top-5 -right-5 bg-red-400 rounded-full px-3 py-1 cursor-pointer">
                     {cart.length}
                  </span>
                   }
                 <Link to="/cart" className="text-black font-semibold px-4 py-2 bg-blue-400  text-white rounded-md">Go To Cart</Link>
                  </div>
                 </nav>
        </div>

			<div className="bg-gray-100 pt-20">
			
				<Outlet />
	
			</div>
		</Fragment>
	);
}

