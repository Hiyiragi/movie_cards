import axios from "axios";
import { useEffect, useState } from "react";

async function loadMovies() {
  try {
    const data = await axios(
      "https://api.themoviedb.org/3/account/{Hiyiragi}/favorite/movies"
    );
    return data;
  } catch (err) {
    throw Error("Failed to load radio!");
  }
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      // try {
      const data = await loadMovies();
      setData(data);
      // } catch (err) {
      //   toas.error(err.message);
      // } finally {
      //   setIsLoading(false);
      // }
    };

    loadData();
  }, []);
  console.log(data);
  return <div>HI</div>;
}

export default App;
