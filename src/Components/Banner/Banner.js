import React, { useState, useEffect, useRef } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import { Link } from "react-router-dom";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 8000);

    intervalRef.current = interval;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [movies]);
 
  const currentMovie = movies[currentMovieIndex];

  return (
    <div
      style={{
        backgroundImage: `url(${
          currentMovie ? imageUrl + currentMovie.backdrop_path : ""
        })`,
      }}
      className="banner"
    >
      <div className="content">
        <h3 style={{ fontFamily: "sans-serif" }}>
          Netflix{" "}
          <span style={{ fontFamily: "monospace", fontWeight: 200 }}>
            originals
          </span>
        </h3>
        <h1 className="title">{currentMovie ? currentMovie.title : ""}</h1>
        <div>
          <p className="Description">
            {currentMovie ? currentMovie.overview : ""}
          </p>
        </div>
        <div className="banner_buttons">
          <Link to={currentMovie ? `/video/${currentMovie.id}` : null}>
            <button className="button">Play</button>
          </Link>
          <button className="button">My List</button>
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
