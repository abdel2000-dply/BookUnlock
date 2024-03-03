import React, { useState } from "react";
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
    { value: "chicklit", label: "Chick Lit" },
    // ... you can add more categories here if needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const apiKey = "AIzaSyCvF51voi8E3lwf44fOIkQ75VwWJXkzuVk";

  const fetchBooks = async () => {
    setLoading(true); // Set loading to true when the fetch starts
    setError(null); // Reset the error state

    try {
      let url = "https://www.googleapis.com/books/v1/volumes?q=";

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

      url += `&printType=books&key=${apiKey}&language=en`;

      const response = await fetch(url);
      const data = await response.json();

      if (!data.items) {
        setError("No results found.");
        setBookData([]);
      }

      const filteredBooks = data.items.filter(
        (book) => book.volumeInfo.pageCount
      );
      setBookData(filteredBooks);
    // } catch (err) {
    //   setError("Error fetching book data.");
    } finally {
      setLoading(false); // Set loading to false when the fetch is complete
    }
  };

  const handleSearch = () => {
    fetchBooks();
    setDisplay(true); // display the books after the search
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="explore-container">
      <h2 className="search-heading">Find new books to read</h2>
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
      {error && <div className="error">{error}</div>}
      <div className="books-container">
        {bookData &&
          bookData.map(
            (book) => (
              console.log(book.id), (<BookCard book={book} key={book.id} />)
            )
          )}
      </div>
    </div>
  );
}

export default Explore;
