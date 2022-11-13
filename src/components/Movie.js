import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.content}>
      <div className={styles.posters}>
        <NavLink to={`/movie/${id}`}>
          <img className={styles.coverImg} src={coverImg} alt={title} />
        </NavLink>
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>{summary.length > 235 ? `{summary.slice(0, 235)}...` : summary}</p>
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
