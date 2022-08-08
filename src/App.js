import React, { useState } from 'react';
import Clock from './components/coments/Clock';
import Comment from './components/coments/Comment';
import MyClock from './components/MyClock';



function App() {

	const comments = [{
		id: 1,
		url: 'img/AvatarMaker.png',
		name: "Author Author",
		title: 'A common use of JSON is to read data from a web server, and display the data in a web page.'
	},
	{
		id: 2,
		url: 'img/AvatarMaker.png',
		name: 'Pavlo Mylkus',
		title: 'PHP has some built-in functions to handle JSON.'
	},
	{
		id: 3,
		url: 'img/AvatarMaker.png',
		name: 'Jhoe Trru',
		title: 'PHP can be converted into JSON by using the PHP function.'
	}];



	const commentsItem = comments.map((comments) =>
		<span key={comments.id.toString()}>
			<Comment
				url={comments.url}
				name={comments.name}
				title={comments.title}
			/>
		</span>

	)

	return (
		<div className="App">
			<div style={{ padding: 0 }}>
				{commentsItem}
				<MyClock />



			</div>

		</div>
	);
}

export default App;
