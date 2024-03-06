import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import "../assets/Styles/BookCard.css";
import "../assets/Styles/explore.css";

function Explore() {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");

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
    // more if needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [clicked, setClicked] = useState(0);
  

  const apiKey = "AIzaSyCvF51voi8E3lwf44fOIkQ75VwWJXkzuVk";

  const fetchBooks = async () => {
    setError(null); // Reset the error state
    console.log('fetchBooks called');
    try {
      let url = "https://www.googleapis.com/books/v1/volumes?q=";

      // If there are no search parameters, fetch random books
      if (!searchTitle && !searchAuthor && !selectedCategory) {
        url += `startIndex=${
          (currentPage - 1) * 10
        }&maxResults=10&printType=books&orderBy=newest&key=${apiKey}&language=en`;
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
        }&maxResults=10&printType=books&key=${apiKey}&language=en`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (!data.items) {
        setError("No results found.");
        setBookData([]);
        return;
      }

      setBookData((prevBooks) => {
        const newBooks = data.items.filter(
          (newBook) => !prevBooks.some((prevBook) => prevBook.id === newBook.id)
        );
        return [...prevBooks, ...newBooks];
      });

    } catch (err) {
      setError("Error fetching book data.");
    }
  };


  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
      fetchBooks();
  }, [clicked, currentPage]);

  const handleSearch = () => {
    setCurrentPage(1); // Reset the currentPage to 1
    setBookData([]);
    setClicked((prevClicked) => prevClicked + 1);
  };


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
                (<BookCard book={book} key={book.id} />)
              )
            )}
        </div>
        <div className="show-more">
        <button className="loadmore" onClick={loadMore}>Load More</button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
