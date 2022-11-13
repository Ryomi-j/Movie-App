import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    return json;
  };
  useEffect(async () => {
    const movieData = await getMovie();
    setMovie(movieData.data.movie);
    console.log(movieData.data.movie);
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
