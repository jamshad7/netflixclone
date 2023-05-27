import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Nav-bar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import { action, originals, animeMovies, Comedy, Horror, trending, Romance } from './urls';

function App() {
  return (
    <div className="App">   
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix Orginals" />
      <Rowpost url={trending} title="Trending" isSmall />
      <Rowpost url={animeMovies} title="Anime" isSmall />
      <Rowpost url={Comedy} title="Comedy" isSmall />
      <Rowpost url={Horror} title="Horror" isSmall />
      <Rowpost url={action} title="Actions" isSmall />
      <Rowpost url={Romance} title="Romance" isSmall />
    </div>
  );
}

export default App;
