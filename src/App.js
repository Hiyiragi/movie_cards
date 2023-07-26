import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { loadMovies } from "service/api";
import MovieCard from "components/MovieCard";
import { getStorageValue, setStorageValue } from "service/localStorage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { genres } from "common/genres";

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
      setState((state) => ({ ...state, movies: data }));
    };

    loadData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        style={{ height: "900px" }}
      >
        {state.movies &&
          state.movies.map((movie) => (
            <SwiperSlide
              key={movie?.id}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <MovieCard
                clickedId={movie?.id}
                originalTitle={movie?.original_title}
                image={movie?.backdrop_path}
                releaseDate={movie?.release_date}
                overview={movie?.overview}
                movieGenresText={genres
                  .filter((genre) => movie?.genre_ids.includes(genre.id))
                  .map((genre) => genre.name)
                  .join(", ")}
                toggleSavedMovie={toggleSavedMovie}
                isSaved={state.saved.includes(movie.id)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </ThemeProvider>
  );
}

export default App;
