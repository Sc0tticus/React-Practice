// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
	return 'Click on Me!';
}

const App = () => {
	return (
		<div>
			<label class="label" for="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			{/* <button style="background-color: blue; color: white;"></button> */}
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
