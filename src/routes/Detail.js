import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Details.module.css";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    return json;
  };
  useEffect(() => {
    (async () => {
      const movieData = await getMovie();
      setMovie(movieData.data.movie);
    })();
  }, []);
  return (
    <div className={styles.frame}>
      <div>
        <Link to="/">
          <h2 className={styles.home}>Movie Top 20</h2>
        </Link>
        <h2 className={styles.title}>{movie.title_english}</h2>
      </div>
      <div className={styles.detail}>
        <img className={styles.detailImg} src={movie.medium_cover_image} />
        <div>
          <p><span>Year</span> : {movie.year}</p>
          <p><span>Rate</span> : {movie.rating}</p>
          <p><span>Runtime</span> : {movie.runtime} minutes</p>
          <p><span>Genre</span> : {movie.genres}</p>
          <p><span>Language</span> : {movie.language}</p>
          <p><span><a href={movie.url} target="blank">Detail Page ></a></span></p>
        </div>
      </div>
    </div>
  );
}
export default Detail;
