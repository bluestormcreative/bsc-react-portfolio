import React from 'react';

const CategoryFilter = ({ selectedCat, setSelectedCat }) => {

  const handleCatClick = (event) => {
    const cat = event.target.textContent;
    setSelectedCat(cat);
  };

  return (
    <section className="categories py-4 flex space-x-4">
      <span
        className={`category ${selectedCat === 'Artists' ? 'cat-active' : ''}`}
        onClick={handleCatClick}
      >
        Artists
      </span>
      <span
        className={`category ${selectedCat === 'Media' ? 'cat-active' : ''}`}
        onClick={handleCatClick}
      >
        Media
      </span>
      <span
        className={`category ${selectedCat === 'Nonprofits' ? 'cat-active' : ''}`}
        onClick={handleCatClick}
      >
        Nonprofits
      </span>
    </section>
  );
};

export default CategoryFilter;
