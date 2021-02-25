import React from 'react';
import { FaAngleLeft, FaAngleRight, FaPlay } from 'react-icons/fa';

const Player = () => {
	return (
		<div className='player'>
			<div className='time-control'>
				<p>Start time</p>
				<input type='range' name='' />
				<p>End time</p>
			</div>
			<div className='play-control'>
				<FaAngleLeft className='skip-back' size='32' />
				<FaPlay className='play' size='40' />
				<FaAngleRight className='skip-forward' size='32' />
			</div>
		</div>
	);
};

export default Player;
