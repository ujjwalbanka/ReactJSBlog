import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateScreen } from '../actions';

class HomeScreen extends Component {
	render() {
		return (
			<div className='landing-page'>
				<div className="logo"> 
					<img 
						className='logo-image' 
						src="http://modusapp.in/app/img/modus_green.png" 
						alt="" 
						width="200" 
					/> 
				</div>
				<div className="heading">
					<h1> Welcome aboard!</h1>
					<p>A one of a kind platform to <br />discover, create manage blogs </p>
				</div>
				<div 
					className="app-button"
					onClick={() => this.props.navigateScreen('list')}
				>
					<p>Start Your Journey</p>
				</div>
			</div>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ navigateScreen }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomeScreen);
