// import React from "react";
import SearchBar from "../SearchBar/SearchBar";
// import styles from "./App.module.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import MovieGrid from "../MovieGrid/MovieGrid.tsx";
import type { Movie } from "../../types/movie";
import Loader from "../Loader/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    console.log(query);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };
  const movies: Movie[] = [
    {
      id: 1,
      title: "Batman Begins",
      poster_path: "/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
    },
  ];
  const handleSelectMovie = (movie: Movie) => {
    console.log(movie);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-center" />
      {isLoading && <Loader />}

      {!isLoading && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelectMovie} />
      )}
    </div>
  );
}
