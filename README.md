# BookUnlock - A Platform for Book Discovery

## Description

BookUnlock is a web application that empowers users to discover, search, review, and explore books across various categories. It leverages the Google Books API to provide a vast library of book information and personalized recommendations.

## Features

- **Search**: Search for books by title, author, genre, or keyword using the Google Books API.
- **Discover**: Explore curated categories of fiction, non-fiction, classics, and bestsellers.
- **Reviews**: Write and read reviews to share your thoughts and experiences with other book lovers.

## Technologies Used

### Frontend
- React
- JavaScript
- CSS
- html

### Backend
- python
- Flask

### API
- Google Books API


Structure:
```
BookUnlock/
|-- backend/
|   |-- README.md
|   |-- models/
|   |   |-- base_model.py
|   |   |-- review.py
|   |   |-- user.py
|   |   |-- __init__.py
|   |-- API/
|   |   |-- __init__.py
|   |   |-- v1/
|   |   |   |-- app.py
|   |   |   |-- __init__.py
|   |   |   |-- views/
|   |   |   |   |-- auth.py
|   |   |   |   |-- index.py
|   |   |   |   |-- users.py
|   |   |   |   |-- __init__.py
|-- frontend/
|   |-- react-app
|-- README.md
|-- venv/
|-- .gitignore
|-- requirements.txt
```

