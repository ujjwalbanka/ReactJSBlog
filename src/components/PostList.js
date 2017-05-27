import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Fullpage, Slide } from 'fullpage-react';
import { navigateScreen } from '../actions';
import PostListCard from './PostListCard';

class PostList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      active: {
	        Fullpage: 0,
	        horizontalSlider1: 0
	      },
	      previous: {
	        Fullpage: 0,
	        horizontalSlider1: 0
	      }
	    };

	    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
	    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
	  }

	  onSlideChangeStart(name, state) {
	    console.log('slide STARTED for', name, state.activeSlide);
	    var sliderState = { previous: {} };
	    sliderState.previous[name] = state.activeSlide;
	    this.setState(sliderState);
	  }

	  onSlideChangeEnd(name, state) {
	    console.log('slide ENDED for', name, state.activeSlide);
	    let sliderState = { active: {} };
	    sliderState.active[name] = state.activeSlide;
	    this.setState(sliderState);
	  }
	render() {
		let fullPageOptions = {
		  // for mouse/wheel events
		  // represents the level of force required to generate a slide change on non-mobile, 10 is default
		  scrollSensitivity: 2,

		  // for touchStart/touchEnd/mobile scrolling
		  // represents the level of force required to generate a slide change on mobile, 10 is default
		  touchSensitivity: 2,
		  scrollSpeed: 500,
		  resetSlides: true,
		  hideScrollBars: true
		};
		return (
			<Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
				<Slide>
					<PostListCard cardId={'card1'} />
				</Slide>
				<Slide>
					<PostListCard cardId={'card2'} />
				</Slide>
				<Slide>
					<PostListCard cardId={'card3'} />
				</Slide>
				<Slide>
					<PostListCard cardId={'card3'} />
				</Slide>
			</Fullpage>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ navigateScreen }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostList);
