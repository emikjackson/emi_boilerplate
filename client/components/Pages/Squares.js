import React, {Component} from 'react'
import '../../style/Squares.css'

class Squares extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: false,
			color: " red",
			num_squares: 1,
			spin: false,
		}

		this.toggleSquareVisible = this.toggleSquareVisible.bind(this);
		this.toggleSquareColor = this.toggleSquareColor.bind(this);
		this.addSquare = this.addSquare.bind(this);
		this.removeSquare = this.removeSquare.bind(this);
		this.toggleSpin = this.toggleSpin.bind(this);
	}

	toggleSquareVisible() {
		this.setState({hidden: !this.state.hidden});
	}

	toggleSquareColor() {
		this.setState({color: this.state.color == " blue" ? " red" : " blue"});
	}

	addSquare() {
		if (this.state.num_squares < 5) {
			this.setState({num_squares: this.state.num_squares + 1});
		}
	}

	removeSquare() {
		if (this.state.num_squares > 1) {
			this.setState({num_squares: this.state.num_squares - 1});
		}
	}

	toggleSpin() {
		this.setState({spin: !this.state.spin});
	}

	render() {
		let squareCSS = 'square ' + this.state.color;
		if (this.state.hidden) {
			squareCSS += ' hide';
		}
		if (this.state.spin) {
			squareCSS += ' spin-animation';
		}
		let squares = [];
		for (let i = 0; i < this.state.num_squares; ++i) {
			squares.push(<div key={`square-${i}`} id='square' className={squareCSS}/>);
	   	}

		return(
				<div className="sq-container">
					<h1 className="page-title">Squares</h1>
					<div className="sq-info">Yellow buttons have been implemented. Grey ones have yet to be implemented (by you! :D).</div>
					<div className="sq-buttons-container">

						<div className="sq-button noselect" onClick={this.toggleSquareVisible}>Toggle Square Visible</div>

						<div className="sq-button noselect" onClick={this.toggleSquareColor}>Toggle Square Color</div>

						<div className="sq-button noselect" onClick={this.addSquare}>Add a Square</div>
						<div className="sq-button noselect" onClick={this.removeSquare}>Delete a Square</div>  

						<div className="sq-button noselect" onClick={this.toggleSpin}>Spin Square!</div>

					</div>
					{squares.map((square) => {
						return (square);
					})}
				</div>
		);
	}
}

export default Squares;
