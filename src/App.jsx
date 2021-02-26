import React, { useState } from 'react';
import './assets/styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import data from './utils';

function App() {
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div className='app'>
			<Song currentSong={currentSong} />
			<Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
		</div>
	);
}

export default App;
