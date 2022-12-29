import React, { useState } from 'react';
import './App.css';

import Loader from './components/Loader'
import BackgroundImage from './components/BackgroundImage';
import BackgroundSound from './components/BackgroundSound';
import ToggleButton from './components/ToggleButton';
import Quotes from './components/Quotes';


import quotes from './helpers/lib/quotes';

function App() : JSX.Element {
	const [type, setType] = useState<'eng' | 'arab'>('eng');
	return (
		<div className="App">
			<Loader/>
			<ToggleButton state={ type } setState={ setType }/>
			<BackgroundImage type={ type }/>
			<BackgroundSound type={ type }/>
			<Quotes quotes={ quotes } type={ type }/>
		</div>
	);
}

export default App;
