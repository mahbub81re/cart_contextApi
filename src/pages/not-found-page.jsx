import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm w-full border border-gray-200">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
