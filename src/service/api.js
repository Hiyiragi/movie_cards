import axios from "axios";

export async function loadMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjUxMTBjY2I0MDMzZmI1YTZmNjgyNjA3MDdkNDQxNSIsInN1YiI6IjY0YWFlN2IyNmEzNDQ4MDBjOWZiNGZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuHGfE_xkgSHOVjwsDH8JF_x92XVowKreWUvaFqpcNo",
    },
  };

  try {
    const data = await axios
      .request(options)
      .then(function (response) {
        return response.data.results;
      })
      .catch(function (error) {
        console.error(error);
      });
    return data;
  } catch (err) {
    throw Error("Failed to load movies!");
  }
}
