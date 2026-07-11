export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}
