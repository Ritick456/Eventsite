// components/SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <input
    type="text"
      placeholder="Search events by name or location..."
      value={searchTerm} // Ensure this is bound to state
      onChange={(e) => onChange(e.target.value)} // Call onChange with the input value
      className="w-full max-w-md rounded-md border border-gray-300 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-200"
    />
  );
};

export default SearchBar;
