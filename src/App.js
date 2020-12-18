import React, { useState } from "react";

import "./styles.css";

const audioBooks = require("./data");
const genreList = [
  "All Genre",
  "Magical Realism",
  "Classic",
  "Self Development",
  "Mystery",
  "Biography",
  "Horror",
  "Fantasy"
];

export default function App() {
  const [genre, setGenre] = useState("All");
  function fetchSelectedGenre(genre) {
    // console.log("you clicked: ",genre);
    setGenre(genre);
  }
  return (
    <div className="App">
      <header>
        <h1>Audio Book Recommendations</h1>
      </header>
      <hr />
      <div>
        {genreList.map((genre) => (
          <ul className="genre-container">
            <button
              className="genre-list"
              onClick={() => fetchSelectedGenre(genre)}
            >
              {genre}
            </button>
          </ul>
        ))}
      </div>
      <section>
        <div className="grid">
          {audioBooks.map((books) => {
            if (genre === "All Genre") {
              return (
                <div>
                  <img src={books.cover} alt="" />
                  <div className="info">
                    <h3 key={books.link}>
                      Book title: <span>{books.bookName}</span>
                    </h3>
                    <h4 key={books.link}>
                      Author: <span>{books.author}</span>
                    </h4>
                    <h4 key={books.link}>
                      Narrator: <span>{books.narrator}</span>
                    </h4>
                    <h4 key={books.link}>
                      Genre: <span>{books.genre}</span>
                    </h4>
                    <button className="knowmore">
                      <a href={books.link} target="_blank" rel="noreferrer">
                        Know more
                      </a>
                    </button>
                  </div>
                </div>
              );
            } else if (books.genre.includes(genre)) {
              return (
                <div className="book-container">
                  <img src={books.cover} alt="" />
                  <div className="info">
                    <h3 key={books.bookName}>
                      Book title: <span>{books.bookName}</span>
                    </h3>
                    <h4 key={books.bookName}>
                      Author: <span>{books.author}</span>
                    </h4>
                    <h4 key={books.bookName}>
                      Narrator: <span>{books.narrator}</span>
                    </h4>
                    <h4 key={books.bookName}>
                      Genre: <span>{books.genre}</span>
                    </h4>
                    <button className="knowmore">
                      <a
                        key={books.bookName}
                        href={books.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Know more
                      </a>
                    </button>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </section>
      <hr />
      <footer>
        Disclaimer: All the books mentioned here are available in audible with a
        free trail of 30days.
      </footer>
    </div>
  );
}
