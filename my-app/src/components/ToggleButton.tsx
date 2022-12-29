import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

interface Props {
	state : 'eng' | 'arab';
	setState : React.Dispatch<React.SetStateAction<'eng' | 'arab'>>;
}

const useStyles = makeStyles((theme : Theme) =>
	createStyles({
		root : {
			width : 42,
			height : 26,
			padding : 0,
			margin : theme.spacing(1),
			position : 'absolute',
			top : 0,
			right : 0
		},
		switchBase : {
			padding : 1,
			'&$checked' : {
				transform : 'translateX(16px)',
				color : theme.palette.common.white,
				'& + $track' : {
					backgroundColor : '#52d869',
					opacity : 1,
					border : 'none'
				}
			},
			'&$focusVisible $thumb' : {
				color : '#52d869',
				border : '6px solid #fff'
			}
		},
		thumb : {
			width : 24,
			height : 24
		},
		track : {
			borderRadius : 26 / 2,
			border : `1px solid ${ theme.palette.grey[400] }`,
			backgroundColor : theme.palette.grey[50],
			opacity : 1,
			transition : theme.transitions.create(['background-color', 'border'])
		},
		checked : {},
		focusVisible : {}
	})
);

const ToggleButton : React.FC<Props> = ({ state, setState }) => {
	const classes = useStyles();

	return (
		<Switch
			checked={ state === 'arab' }
			onChange={ () => setState(prevState => prevState === 'eng' ? 'arab' : 'eng') }
			classes={ {
				root : classes.root,
				switchBase : classes.switchBase,
				thumb : classes.thumb,
				track : classes.track,
				checked : classes.checked
			} }
		/>
	);
};

export default ToggleButton;
