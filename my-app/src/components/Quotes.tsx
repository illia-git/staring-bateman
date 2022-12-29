import React, { useState, useEffect } from 'react';
import { Grid, Typography, Fade } from '@material-ui/core';
import '../assets/styles/Quotes.styles.scss';

interface IQuote {
	id : number;
	quote_eng : string;
	quote_arab : string;
}

interface IProps {
	quotes : IQuote[];
}

const Quotes : React.FC<IProps> = ({ quotes }) : JSX.Element | null => {
	const [currentQuote, setCurrentQuote] = useState<IQuote | null>(null);

	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			setCurrentQuote(quotes[index]);
			index = (index + 1) % quotes.length;
		}, 3000);
		return () => clearInterval(interval);
	}, [quotes]);

	if (!currentQuote) {
		return null;
	}


	return (
		<div key={ currentQuote.id }>
			<Fade in={ true } timeout={ 1000 } onExited={ () => setCurrentQuote(null) }>
				<Grid container justify="center" alignItems="center" className="my-container">
					<Grid item xs={ 12 } sm={ 8 } md={ 6 } lg={ 4 } xl={ 2 }>
						<Typography variant="h5" component="p" className="quote">
							«‎{ currentQuote.quote_eng }»‎
						</Typography>
					</Grid>
				</Grid>
			</Fade>
		</div>
	);
};

export default Quotes;
