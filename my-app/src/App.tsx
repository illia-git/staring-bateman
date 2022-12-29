import React from 'react';
import './App.css';

import BackgroundImage from './components/BackgroundImage';
import BackgroundSound from './components/BackgroundSound';
import Quotes from './components/Quotes';

import quotes from './helpers/lib/quotes';

function App() : JSX.Element {
	return (
		<div className="App">
			<BackgroundImage type="eng"/>
			<BackgroundSound type="arab"/>
			<Quotes quotes={ quotes }/>
		</div>
	);
}

export default App;
