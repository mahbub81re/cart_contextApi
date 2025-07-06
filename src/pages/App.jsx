import { useEffect, useState, useRef } from 'react';
import ProductCard from '../components/product-card';
import { filteredProducts } from '../utils/utils';
import Loading from '../components/Loading';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const suggestionRef = useRef(null);
  const filteredAndSortedProducts = filteredProducts(products, searchTerm, sortOrder);    
  const  [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data || []);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }

  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = products
      .map(product => product.title)
      .filter(title => title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
         setSuggestions(filtered);
      };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  return (
    <div className="bg-gray-100">
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./images/page-title.jpg')" }}>
        <div className="relative z-10 text-center text-white py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Search Your Favorite Product</h1>
          <p className="text-lg mt-4">Discover the best products tailored to your needs</p>
          <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-4">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="relative w-full" ref={suggestionRef}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search products..."
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none shadow"
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-300 rounded-b shadow max-h-48 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 hover:bg-yellow-100 cursor-pointer text-gray-700"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="px-4 py-3 rounded border border-gray-300 focus:outline-none shadow w-full md:w-60"
          >
            <option value="">Sort by Price</option>
            <option value="low-high">Low ➡ High</option>
            <option value="high-low">High ➡ Low</option>
          </select>
        </form>

        <h2 className="text-3xl font-bold text-center mb-8">Latest Products</h2>
        {loading ? (
           <Loading/>
        ) : 
           filteredAndSortedProducts.length === 0 ? (
          <p className="text-red-500 text-center">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
