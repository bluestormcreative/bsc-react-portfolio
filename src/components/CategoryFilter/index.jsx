import React, { useState } from 'react';

const CategoryFilter = ({ selectedCat, setSelectedCat }) => {

  const [cats] = useState([
    'Artists',
    'Media',
    'Nonprofits',
  ]);

  const handleCatClick = (event) => {
    const cat = event.target.textContent;
    setSelectedCat(cat);
  };

  return (
    <section className="categories mb-8 flex w-auto space-x-4 border border-solid">
      <span className="category-text inline-block p-1">Select a Category:</span>
      {cats.map((cat) => (
        <span
          className={`category inline-block p-1 ${selectedCat === cat ? 'cat-active' : ''}`}
          onClick={handleCatClick}
        >
          {cat}
        </span>
      ))}
    </section>
  );
};

export default CategoryFilter;
