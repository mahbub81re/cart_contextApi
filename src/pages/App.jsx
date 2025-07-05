import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../features/cartContext';
import { Link } from 'react-router';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async (query = '') => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?s=${query}`);
      const data = await response.json();
      console.log('Fetched meals:', data);
      setMeals(data || []);
    } catch (error) {
      console.error('Failed to fetch meals:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMeals(searchTerm.trim());
  };

  

  const renderMealCards = () => {
    if (!meals.length) {
      return <p className="text-red-500">No meals found.</p>;
    }

    return meals.map((meal) => {
      const highlightedTitle = searchTerm
        ? meal.title.replaceAll(
            searchTerm,
            `<span style='color:red;'>${searchTerm}</span>`
          )
        : meal.title;

      const shortDescription = meal.description
        ? `${meal.description.slice(0, 60)}...`
        : 'No instructions available.';

      return (
        <div
          key={meal.id}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between"
        >
          <img
            src={meal.image}
            alt={meal.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3
              className="text-lg font-semibold mb-2"
              dangerouslySetInnerHTML={{ __html: highlightedTitle }}
            ></h3>
            <p className="text-gray-600 text-sm flex-grow">{shortDescription}</p>
          </div>
          <div className="p-4 pt-0 flex justify-between gap-2">
            <Link
              to={`/details/${meal.id}`}
              className="bg-yellow-400 text-black text-sm font-semibold py-2 px-3 rounded hover:bg-yellow-500 transition"
            >
              DETAILS
            </Link>

            <button
              onClick={() => addToCart({
                id: meal.id,
                title: meal.title,
                price: meal.price ,
                image: meal.image,
                quantity: 1
              })}
              className="bg-green-500  text-sm  text-white font-semibold py-2 px-3 rounded hover:bg-green-600 transition"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-gray-100">
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/page-title.jpg')" }}
      >
        <div className="p-5 bg-white flex justify-between w-full px-8">
          <img src='/images/logo (3) (1).png' alt="Logo" className="mb-4 w-24" />
             <Link to="/cart" className="text-black font-semibold px-4 py-2 bg-blue-400  text-white rounded-md">Go To Cart</Link>
        </div>

        <div className="relative z-10 text-center text-white py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Search Your Favorite Recipe</h1>
          <p className="text-lg mt-4">
            A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking
          </p>
          <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto">
        <div className="mt-10 max-w-xl mx-auto mb-6">
          <form onSubmit={handleSearch} className="flex rounded overflow-hidden shadow-lg">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 px-5 flex items-center justify-center hover:bg-yellow-500 transition"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">Latest Recipes</h1>

        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
          {renderMealCards()}
        </div>
      </div>
    </div>
  );
};

export default App;
