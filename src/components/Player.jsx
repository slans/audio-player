import React, { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaPlay } from 'react-icons/fa';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	const [songInfo, setSongInfo] = useState({
		currentTime: null,
		duration: null,
	});
	const audioRef = useRef(null);

	// event handlers
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const timeUpdateHandler = (e) => {
		const { currentTime, duration } = e.target;
		setSongInfo({ currentTime, duration });
	};

	// funcs
	const customizeTime = (time) => {
		const min = Math.floor(time / 60);
		const sec = time < 0 ? `0${time}` : Math.floor(time % 60);
		return `${min}:${sec}`;
	};

	const { currentTime, duration } = songInfo;

	return (
		<div className='player'>
			<div className='time-control'>
				<p>{customizeTime(currentTime)}</p>
				<input type='range' name='' />
				<p>{customizeTime(duration)}</p>
			</div>
			<div className='play-control'>
				<FaAngleLeft className='skip-back' size='32' />
				<FaPlay onClick={playSongHandler} className='play' size='40' />
				<FaAngleRight className='skip-forward' size='32' />
			</div>
			<audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
		</div>
	);
};

export default Player;
