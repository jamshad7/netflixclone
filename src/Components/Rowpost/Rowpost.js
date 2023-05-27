import React, { useState } from "react";
import './Rowpost.css';
import YouTube from "react-youtube";
import { useEffect } from 'react';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';

function Rowpost(props) {
  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

const handleMovie = (id) => {
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
    if (response.data.results.length !== 0) {
      const latestVideo = response.data.results[0];
      if (urlId === latestVideo.key) {
        // If the same video is selected, close it
        setUrlId('');
      } else {
        setUrlId(latestVideo.key);
      }
    } else {
     alert("No video in youtube")
    }
  });
};


return (
  <div className="row">
    <h2 style={{ margin: '1rem' ,marginTop:'2rem'}}>{props.title}</h2>
    <div className="posters">
      {movies.map((obj) => (
        <div key={obj.id} className="poster-container">
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            src={`${imageUrl + obj.backdrop_path}`}
            alt=""
          />
          <h1 className={`poster-title ${props.isSmall ? 'small' : ''}`}>
            {props.isSmall ? obj.original_title : obj.name}
          </h1>
          {!props.isSmall && <p className="description">{obj.overview}</p>}
        </div>
      ))}
    </div>
    {urlId && <YouTube videoId={urlId} opts={opts} />}
  </div>
);




}

export default Rowpost;
