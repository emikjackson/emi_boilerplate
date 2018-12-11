import React, {Component} from 'react'
import { getFooterButtons } from '../../../data/buttons.js'

let buttons = getFooterButtons();

class Footer extends Component {
	render() {
		return(
				<div className="footer">
                    {buttons.map((button, idx) => {
						if (idx < 2) {
							return(<a key={`footer-${idx}`} className="nav-button left-nav-group" target="_blank">{button.name}</a>)
						} else {
							return(<a key={`footer-${idx}`} className="nav-button right-nav-group" target="_blank">{button.name}</a>)
						}
					})}
                </div>
		);
	}
}

export default Footer;
