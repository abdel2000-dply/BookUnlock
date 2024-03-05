import React from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({
  options,
  searchTitle,
  setSearchTitle,
  searchAuthor,
  setSearchAuthor,
  selectedCategory,
  setSelectedCategory,
  handleSearch
}) => {
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="explore-bar">
      <h2 className="search-heading">Books</h2>
      <div className="search-bar-container">
        <div className="search-input-container bytitle">
          <input
            className="search-bar"
            type="text"
            placeholder="Search by title ..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="search-input-container byauthor">
          <input
            className="search-bar"
            type="text"
            placeholder="Search by Author ..."
            value={searchAuthor}
            onChange={(e) => setSearchAuthor(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        {/* category dropdown */}
        <Select
          className="categories"
          options={options}
          isMulti
          placeholder="Categories ..."
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
