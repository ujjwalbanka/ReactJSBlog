import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import PostList from './PostList';
import PostDetails from './PostDetails';


class Blog extends Component {

	render() {
		let RenderComponent = '';
		switch (this.props.showScreen) {
			case 'home':
				RenderComponent = <HomeScreen />; 
				break;
			case 'list':
				RenderComponent = <PostList />;
				break;
			case 'details':
				RenderComponent = <PostDetails />;
				break;
			default:
				RenderComponent = <HomeScreen />;
		}
		return (
			<div>
				{RenderComponent}
			</div>
			);
	}
}

function mapStateToProps(state) {
  const {
    showScreen
  } = state;

  return {
    showScreen
  };
}

export default connect(mapStateToProps, null)(Blog);
