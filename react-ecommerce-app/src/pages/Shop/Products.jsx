import React, { useState } from 'react';
import { ProDuct } from '../../utils/ProDuct';
import { BsCartCheck } from "react-icons/bs";

function Products({ Headline }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

  // Unique categories from product data
  const categories = ["All", ...new Set(ProDuct.map((item) => item.category))];

  // Filter products by category
  const filteredProducts =
    selectedCategory === "All"
      ? ProDuct
      : ProDuct.filter((item) => item.category === selectedCategory);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // reset to first page when category changes
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center relative mb-8">
          {Headline}
          <span className="block w-16 sm:w-20 h-1 bg-yellow-500 mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(item)}
              className={`px-4 sm:px-6 py-2 rounded-full shadow-md font-medium border transition duration-300 ${
                selectedCategory === item
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-yellow-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {currentProducts.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-md mb-4"
              />
              
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mb-3">${item.price}</p>

              {/* Add to Cart Button */}
              <button 
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 text-white font-medium rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
              >
                <BsCartCheck className="text-lg" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
            
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md font-medium shadow ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md font-medium shadow ${
                  currentPage === index + 1
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-gray-700 hover:bg-yellow-500 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md font-medium shadow ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
