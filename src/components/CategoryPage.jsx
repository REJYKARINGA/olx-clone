import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Cars",
  "Motorcycles",
  "Mobile Phones",
  "For Sale: Houses & Apartments",
  "Scooters",
  "Commercial & Other Vehicles",
  "For Rent: Houses & Apartments"
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <ul className="flex space-x-4 text-black text-sm">
      {categories.map((category) => (
        <li key={category}>
          <button
            onClick={() => setSelectedCategory(category)}
            className={`hover:text-green-600 ${selectedCategory === category ? 'font-bold' : ''}`}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
