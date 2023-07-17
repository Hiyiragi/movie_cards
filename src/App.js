import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import { ThemeProvider, styled } from "styled-components";
import { theme } from "./Theme";
import { loadMovies } from "service/api";
import MovieCard from "components/MovieCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { getStorageValue, setStorageValue } from "service/localStorage";

// import required modules

function App() {
  const [state, setState] = useState({
    movies: null,
    saved: getStorageValue("savedMovies") || [],
  });
  // const [movies, setMovies] = useState(null);
  // const [saved, setSaved] = useState(getStorageValue("savedMovies"));

  const toggleSavedMovie = (clickedId) => {
    console.log(state.saved.length);
    const movieIndex = state.saved.indexOf(clickedId);
    if (movieIndex >= 0) {
      const newSaved = [...state.saved];
      newSaved.splice(movieIndex, 1);
      setState({
        ...state,
        saved: newSaved,
      });
    } else {
      setState({ ...state, saved: [...state.saved, clickedId] });
    }
  };

  useEffect(() => {
    setStorageValue("savedMovies", state.saved);
  }, [state.saved]);

  useEffect(() => {
    const loadData = async () => {
      const data = await loadMovies();
      setState({ ...state, movies: data });
    };

    loadData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        mousewheel={true}
        className="mySwiper"
      >
        {state.movies &&
          state.movies.map((movie) => (
            <SwiperSlide
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <MovieCard
                key={movie?.id}
                clickedId={movie?.id}
                originalTitle={movie?.original_title}
                image={movie?.backdrop_path}
                releaseDate={movie?.release_date}
                overview={movie?.overview}
                genresList={movie?.genre_ids}
                toggleSavedMovie={toggleSavedMovie}
                isSaved={state.saved.includes(movie.id)}
              ></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </ThemeProvider>
  );
}

export default App;
