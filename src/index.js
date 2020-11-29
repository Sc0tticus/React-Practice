// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const buttonText = { text: 'Click me' };
	const labelText = 'Enter name:';

	return (
		<div>
			<label class="label" for="name">
				{labelText}
			</label>
			<input id="name" type="text" />
			{/* <button style="background-color: blue; color: white;"></button> */}
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
