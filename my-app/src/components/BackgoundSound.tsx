import React, { useEffect } from 'react';
import sound_eng from '../assets/audio/sound_eng.mp3';
import sound_arab from '../assets/audio/sound_arab.mp3';

interface IBackgroundSoundProps {
	type : 'eng' | 'arab';
}

const BackgroundSound : React.FunctionComponent<IBackgroundSoundProps> = ({ type }) : null => {
	const AUDIO = type === 'eng' ? sound_eng : sound_arab;
	useEffect(() => {
		const audioElement = new Audio(AUDIO);
		audioElement.loop = true;
		audioElement.play();

		return () => {
			audioElement.pause();
			audioElement.currentTime = 0;
		};
	}, []);

	return null;
};

export default BackgroundSound;
