import React, { useState, useEffect } from 'react';
import { Typography, Fade } from '@material-ui/core';

interface IQuote {
	quote_eng : string;
	quote_arab : string;
}

interface IProps {
	quotes : IQuote[];
}

const Quotes : React.FC<IProps> = ({ quotes }) : JSX.Element => {
	const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [quotes]);

	const currentQuote = quotes[currentQuoteIndex];

	return (
		<Fade in={ true } timeout={ 1000 }>
			<Typography variant="h5" component="p">
				{ currentQuote.quote_eng }
			</Typography>
		</Fade>
	);
};

export default Quotes;
