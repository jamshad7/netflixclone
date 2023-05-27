import React, { useEffect, useState } from 'react';
import Navbar from '../Nav-bar/Navbar';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import axios from 'axios';
import { API_KEY } from '../../constants/constants';
import { action } from '../../urls';
import Rowpost from '../Rowpost/Rowpost';
function Watch() {
  const { id } = useParams();
  const opts = {
    height: "750px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&=&=43969`
      );
      if (data) {
        setMovie(data.results[0]);
      }
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      console.log(res.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <YouTube videoId={movie.key} opts={opts} />
      <Rowpost url={action} title="Recommendations" />
    </div>
  );
}

export default Watch;
