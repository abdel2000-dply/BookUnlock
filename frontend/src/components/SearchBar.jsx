import React from 'react';
import Select from "react-select";

const SearchBar = ({ options, searchTitle, setSearchTitle, searchAuthor, setSearchAuthor, selectedCategory, setSelectedCategory, handleSearch }) => {
    
    
    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
    };

    return (
        <div className="search-bar-container">
            <input
                className="search-bar bytitle"
                type="text"
                placeholder="Search for books by title ..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <input
                className="search-bar byauthor"
                type="text"
                placeholder="Search for books by Author ..."
                value={searchAuthor}
                onChange={(e) => setSearchAuthor(e.target.value)}
            />
            {/* category dropdown */}
            <Select
                className="categories"
                options={options}
                isMulti
                placeholder="Select categories ..."
                value={selectedCategory}
                onChange={handleCategoryChange}
            />
            <button className="search-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;