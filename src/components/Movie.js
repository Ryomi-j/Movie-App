import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <div className={styles.content} onMouseEnter={()=> setIsEntered(true)} onMouseLeave={(()=> setIsEntered(false))}>
      <div className={isEntered ? styles.displayNone : null}>
        <img className={styles.coverImg} src={coverImg} alt={title} />
      </div>
      <div className={isEntered ? styles.details : styles.displayNone}>
        <Link to={`/movie/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{summary.length > 235 ? summary.slice(0, 235)+'...' : summary}</p>
        <ul>
          <h3>Genre :</h3>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
