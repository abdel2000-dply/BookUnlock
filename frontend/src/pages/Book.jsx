import React from "react";

function Book() {
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="Book cover" />
            <h1>{bookTitle}</h1>
            <p>By {author}</p>
            <p>{description}</p>
        </div>
    )
}