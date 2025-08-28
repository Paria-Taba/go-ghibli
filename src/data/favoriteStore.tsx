import { create } from 'zustand';

export interface Film {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  description: string;
  director: string;
}

interface FavoriteState {
  films: Film[];                        
  favoriteFilms: (film: Film) => void; 
  deleteFilm:(id:string)=>void
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  films: [],

  favoriteFilms: (film) =>
    set((state) => ({
      films: [...state.films, film],
    })),
  deleteFilm: (id) =>
    set((state) => ({
      films: state.films.filter((film) => film.id !== id),
    })),
}));
