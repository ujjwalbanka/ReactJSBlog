import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollPage, Section } from 'react-scrollpage';
import { navigateScreen } from '../actions';
import PostListCard from './PostListCard';

class PostList extends Component {
	render() {
		const options = {
			curPage: 1,           // inital page number, most 1
			totalPage: 4,         // totoal page number
			delay: 1200           // delay between two scoll animation
		};
		return (
			<ScrollPage {...options} >
				<Section>
					<PostListCard cardId={'card1'} />
				</Section>
				<Section>
					<PostListCard cardId={'card2'} />
				</Section>
				<Section>
					<PostListCard cardId={'card3'} />
				</Section>
				<Section>
					<PostListCard cardId={'card3'} />
				</Section>
			</ScrollPage>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ navigateScreen }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostList);
