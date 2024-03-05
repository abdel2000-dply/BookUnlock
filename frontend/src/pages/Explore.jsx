import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import "../assets/Styles/BookCard.css";
import "../assets/Styles/explore.css";

function Explore() {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [display, setDisplay] = useState(false);

  const options = [
    { value: "art", label: "Art" },
    { value: "fantasy", label: "Fantasy" },
    { value: "fiction", label: "Fiction" },
    { value: "business", label: "Business" },
    { value: "crime", label: "Crime" },
    { value: "biography", label: "Biography" },
    { value: "comics", label: "Comics" },
    { value: "historicalfiction", label: "Historical Fiction" },
    { value: "history", label: "History" },
    { value: "horror", label: "Horror" },
    { value: "humorcomedy", label: "Humor and Comedy" },
    { value: "manga", label: "Manga" },
    { value: "memoir", label: "Memoir" },
    { value: "music", label: "Music" },
    { value: "mystery", label: "Mystery" },
    { value: "nonfiction", label: "Nonfiction" },
    { value: "paranormal", label: "Paranormal" },
    { value: "philosophy", label: "Philosophy" },
    { value: "poetry", label: "Poetry" },
    { value: "psychology", label: "Psychology" },
    { value: "religion", label: "Religion" },
    { value: "romance", label: "Romance" },
    { value: "science", label: "Science" },
    { value: "childrens", label: "Children's" },
    { value: "classics", label: "Classics" },
    { value: "cookbooks", label: "Cookbooks" },
    { value: "ebooks", label: "Ebooks" },
    { value: "graphicnovels", label: "Graphic Novels" },
    { value: "chicklit", label: "Chick Lit" }
    // ... you can add more categories here if needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchClicked, setSearchClicked] = useState(false);

  const apiKey = "AIzaSyCvF51voi8E3lwf44fOIkQ75VwWJXkzuVk";

  const fetchBooks = async () => {
    setLoading(true); // Set loading to true when the fetch starts
    setError(null); // Reset the error state

    try {
      let url = "https://www.googleapis.com/books/v1/volumes?q=";

      // If there are no search parameters, fetch random books
      if (!searchTitle && !searchAuthor && !selectedCategory) {
        url += `orderBy=newest&maxResults=10&key=${apiKey}&language=en`;
      } else {
        if (searchTitle) {
          url += `intitle:${encodeURIComponent(searchTitle)}`;
        }
        if (searchAuthor) {
          url += `+inauthor:${encodeURIComponent(searchAuthor)}`;
        }
        if (selectedCategory) {
          selectedCategory.forEach((category) => {
            url += `+subject:${encodeURIComponent(category.value)}`;
          });
        }
        url += `&startIndex=${
          (currentPage - 1) * 10
        }&maxResults=10&orderBy=relevance&printType=books&key=${apiKey}&language=en`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (!data.items) {
        setError("No results found.");
        setBookData([]);
        return;
      }

      const filteredBooks = data.items.filter(
        (book) => book.volumeInfo.pageCount
      );
      setBookData(filteredBooks);
    } catch (err) {
      setError("Error fetching book data.");
    } finally {
      setLoading(false); // Set loading to false when the fetch is complete
    }
  };

  // Add a function to go to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Add a function to go to the previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    fetchBooks();
  }, [searchClicked, currentPage]);

  const handleSearch = () => {
    setCurrentPage(1); // Reset the currentPage to 1
    setDisplay(true); // Display the books after the search
    setSearchClicked((prev) => !prev); // Toggle searchClicked
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="explore-page">
      <div className="e-s-container">
        <SearchBar
          options={options}
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          searchAuthor={searchAuthor}
          setSearchAuthor={setSearchAuthor}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleSearch={handleSearch}
        />
      </div>
      <div className="results">
        {error && <div className="error">{error}</div>}
        <div className="books-container">
          {bookData &&
            bookData.map(
              (book) => (
                console.log(book.id), (<BookCard book={book} key={book.id} />)
              )
            )}
        </div>
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={goToPreviousPage}>Previous</button>
          )}
          {display && <button onClick={goToNextPage}>Next</button>}
        </div>
      </div>
    </div>
  );
}

export default Explore;
