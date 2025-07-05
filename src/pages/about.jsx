import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 sm:p-12">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Welcome to <span className="font-semibold text-yellow-500">Meal Finder</span> — your go-to place to explore, search, and discover delicious recipes from around the world!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">🌟 Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Search and explore thousands of recipes instantly.</li>
              <li>View detailed information about each meal including category, area, and instructions.</li>
              <li>Watch video tutorials for easy cooking guidance.</li>
              <li>Add your favorite meals to your shopping cart.</li>
              <li>Manage your cart with flexible quantity updates and total price calculation.</li>
              <li>Responsive design for mobile, tablet, and desktop.</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <img 
              src="./../images/card.jpg" 
              alt="Delicious food"
              className="rounded-lg shadow-md object-cover h-64 w-full"
            />
          </div>

        </div>

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We believe cooking should be joyful, easy, and accessible to everyone. Our carefully curated recipes and easy-to-use interface make it simple to find and try new dishes every day.
          </p>

          <Link
            to="/"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition"
          >
            🍳 Explore Recipes
          </Link>
        </div>

      </div>
    </div>
  );
}
