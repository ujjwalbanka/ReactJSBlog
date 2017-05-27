import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SectionsContainer, Section } from 'react-fullpage';
import { navigateScreen } from '../actions';
import PostListCard from './PostListCard';

class PostList extends Component {
	render() {
		const options = {
			sectionClassName: 'section',
			anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
			scrollBar: false,
			navigation: false,
			verticalAlign: false,
			arrowNavigation: false
		};
		return (
			<SectionsContainer {...options}> 
				<Section>
					<PostListCard cardId={'card1'} />
				</Section>
				<Section>
					<PostListCard cardId={'card2'} />
				</Section>
				<Section>
					<PostListCard cardId={'card3'} />
				</Section>
			</SectionsContainer>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ navigateScreen }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostList);
