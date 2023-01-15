import React, { useState } from 'react';
import { Button, Modal, Typography } from '@material-ui/core';


const AudioPermissionModal : React.FC = () : JSX.Element => {
	// Set up state to control the visibility of the modal
	const [open, setOpen] = useState(false);

	// Function to handle when the user clicks the "Turn on audio" button
	const handleTurnOnAudio = () : void => {
		// Request audio permission
		navigator.mediaDevices.getUserMedia({ audio : true }).then((stream) => {
			// Audio permission granted, do something with the stream (e.g. play audio)
		}).catch((error) => {
			// Audio permission denied or an error occurred
			console.error(error);
		});

		// Close the modal
		setOpen(false);
	};


	return (
		<>
			<Button onClick={ () => setOpen(true) }>Play Audio</Button>
			<Modal open={ open } onClose={ () : void => setOpen(false) }>
				<div style={ { padding : 20 } }>
					<Typography variant="h6">Turn on audio permission</Typography>
					<Typography variant="body1">
						In order to play audio, you need to turn on permission in your browser settings.
					</Typography>
					<Button onClick={ handleTurnOnAudio }>Turn on audio</Button>
				</div>
			</Modal>
		</>
	);
};

export default AudioPermissionModal;