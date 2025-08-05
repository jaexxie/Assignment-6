"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Movie from "./components/movie.js";
import AddMovie from "./components/addMovie.js";
import { sortByTitle, sortByRating } from "./components/sortMovies";
import { useState } from "react";

export default function Home() {
  const [movie, setMovie] = useState([]);

  const addMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
    console.log(movie);
  };

  const deleteMovie = (title) => {
    setMovie(movie.filter((m) => m.title !== title));
  };

  function TitleSort() {
    setMovie(sortByTitle(movie));
  }

  function RatingSort() {
    setMovie(sortByRating(movie));
  }

  return (
    <div className={styles.container}>
      <h1>Min filmlista</h1>

      <AddMovie onAddMovie={addMovie} />

      <Movie movies={movie} onDeleteMovie={deleteMovie} />

      <div className={styles.buttonGroup}>
        <button className={styles.sortButton} onClick={TitleSort}>
          Alfabetisk ordning
        </button>
        <button className={styles.sortButton} onClick={RatingSort}>
          Betygsordning
        </button>
      </div>
    </div>
  );
}
