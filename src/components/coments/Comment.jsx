import React from 'react';
import './Comment.css';
import Clock from './Clock';
const Comment = (props) => {

	return (
		<div className='Comment'>
			<div className='author'>
				<img
					src={props.url}
					className='author__avatar' />
				<h3 className='author__name'>{props.name}</h3>

			</div>

			<span className='content'>{props.title}</span>
		</div>
	);
}

export default Comment;