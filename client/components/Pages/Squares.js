import React, {Component} from 'react'
import '../../style/Squares.css'

class Squares extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: false,
			blue: false,
			/* TODO: Add some variables to state */
		}

		this.hideSquare = this.hideSquare.bind(this);
		this.showSquare = this.showSquare.bind(this);
		/* TODO: Bind some more functions! */
	}

	hideSquare() {
		this.setState({hidden: true});
	}

	showSquare() {
		this.setState({hidden: false});
	}

	/* TODO: Create some more functions! */

	render() {
		let squareCSS = 'square';
		if (this.state.hidden) {
			squareCSS += ' hide';
		}

		return(
				<div className="sq-container">
					<h1 className="page-title">Squares</h1>
					<div className="sq-info">Yellow buttons have been implemented. Grey ones have yet to be implemented (by you! :D).</div>
					<div className="sq-buttons-container">

						{/* TODO: Combine these two buttons into one button which toggles the square's visibility */}
						<div className="sq-button" onClick={this.hideSquare}>Hide Square</div>
						<div className="sq-button" onClick={this.showSquare}>Show Square</div>

						{/* TODO: Create a new function to change the square's color */}
						{/* Note: Remove 'todo' CSS class when ready to start */}
						<div className="sq-button todo">Turn Square Blue</div>

						{/* TODO: Create new functions for the following features. */}
						<div className="sq-button todo">Add a Square</div>     {/* Set maximum at 5 */}
						<div className="sq-button todo">Delete a Square</div>  {/* Set minimum at 1 */}

						{/* OPTIONAL CHALLENGE */}
						<div className="sq-button todo">Spin Square!</div>

					</div>
					<div id='square' className={squareCSS}/>
				</div>
		);
	}
}

export default Squares;
