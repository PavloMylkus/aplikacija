import React, { useState } from 'react';

class MyClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);
		// 
		this.state = { date: new Date() };
	}
	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div>
				<button className='MyBtn' onClick={this.handleClick}> {
					this.state.isToggleOn ? 'Показати' : 'Сховати'
				}</button>
				<div className={this.state.isToggleOn ? 'clock' : 'active '}>
					<span>Час публікації: {this.state.date.toLocaleTimeString()}.</span>
				</div>
			</div >
		);
	}

}

export default MyClock;