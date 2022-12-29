import React from 'react';
import './App.css';

import BackgroundImage from './components/BackgroundImage';
import BackgroundSound from './components/BackgoundSound';

function App() : JSX.Element {
    return (
        <div className="App">
	        <BackgroundImage type="eng"/>
	        <BackgroundSound type="arab"/>
        </div>
    );
}

export default App;
