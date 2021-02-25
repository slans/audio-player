import React from 'react';
import './assets/styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';

function App() {
	return (
		<div className='app'>
			<Song />
			<Player />
		</div>
	);
}

export default App;
