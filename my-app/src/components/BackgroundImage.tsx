import React from 'react';
import bateman_eng from '../assets/images/bateman_eng.gif';
import bateman_arab from '../assets/images/bateman_arab.gif';

interface IBackgroundImageProps {
	type : 'eng' | 'arab';
}

const BackgroundImage : React.FunctionComponent<IBackgroundImageProps> = ({ type }) : JSX.Element => {
	const GIF = type === 'eng' ? bateman_eng : bateman_arab;
	return (
		<div
			style={ {
				backgroundPosition : 'center',
				backgroundImage : `url(${ GIF })`,
				backgroundSize : 'cover',
				height : '100vh',
				width : '100vw'
			} }
		/>
	);
};

export default BackgroundImage;
