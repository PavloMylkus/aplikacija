import React from "react";

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: new Date() };
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
			<div className="clock">
				<span>Час публікації: {this.state.date.toLocaleTimeString()}.</span>
			</div>
		);
	}
}
export default Clock;