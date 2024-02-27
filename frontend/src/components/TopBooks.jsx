import { useState, useEffect } from "react";
import BookList from "./BookList";

function TopBooks() {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);
  const TopBooks = [
    { title: "Iron Flame (The Empyrean, #2)" },
    { title: "Happy Place" },
    { title: "Love, Theoretically" },
    { title: "The Stolen Heir (The Stolen Heir Duology, #1)" },
    { title: "A Curse for True Love (Once Upon a Broken Heart, #3)" },
    { title: "Yellowface" },
    { title: "The Bee Sting" },
    { title: "Tress of the Emerald Sea (The Cosmere, #28)" },
    { title: "the heaven and earth grocery store" },
    { title: "Chain Gang All Stars" }
  ];

  useEffect(() => {
    const apiKey = "AIzaSyCvF51voi8E3lwf44fOIkQ75VwWJXkzuVk";

    const fetchBooks = async () => {
      try {
        // make multiple promises at the same time and wait for all of them to complete.
        const promises = TopBooks.map((book) => {
          const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${book.title}&printType=books&fields=items(volumeInfo)&key=${apiKey}&language=en`;
          return fetch(url).then((response) => response.json());
        });

        const booksData = await Promise.all(promises);

        const newBookData = booksData.flatMap((data) => {
          const filteredData = data.items.filter(
            (item) => item.volumeInfo.pageCount
          );
          return filteredData.length > 0 ? [filteredData[0]] : [];
        });

        setBookData(newBookData);
      } catch (err) {
        setError("Error fetching book data.");
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (bookData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <BookList bookData={bookData} />
    </>
  );
}

export default TopBooks;
