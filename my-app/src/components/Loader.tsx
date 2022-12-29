import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme : Theme) =>
	createStyles({
		root : {
			display : 'flex',
			alignItems : 'center',
			justifyContent : 'center',
			height : '100vh'
		}
	})
);


const Loader : React.FC = () : JSX.Element | null => {
	const classes = useStyles();
	const [showLoader, setShowLoader] = useState<boolean>(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	if (!showLoader) {
		return null;
	}

	return (
		<div className={ classes.root }>
			<CircularProgress/>
		</div>
	);
};

export default Loader;
