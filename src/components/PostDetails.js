import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateScreen } from '../actions';
import PostDetailDescription from './PostDetailDescription';

class PostDetails extends Component {
	render() {
		const { cardDetail } = this.props;
		return (
			<div className='full-scroll'>
				<div className="navbar ">
					<div className="navbar-inner">
						<div className="left sliding" onClick={() => this.props.navigateScreen('list')}>
							<span className="glyphicon glyphicon-arrow-left back link" />
						</div>
					</div>
				</div>
				<div className="page-content hide-bars-on-scroll">
					<div className='page-content-holder'>
						<article>
							<div className="list-block media-list">
								<div className="detail-image-holder">
									<img src='http://akanksharedhu.com/wp-content/uploads/2016/09/DSC6815-copy.jpg' />
								</div>
								<div className='header-holder'>
									<div className='header-heading'>{cardDetail.category}</div>
									<h2>{cardDetail.heading}</h2>
									<div>{cardDetail.time}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{cardDetail.readTime}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{cardDetail.totalReader}</div>
								</div>
								<div className="list-block media-list">
									<div className="content-block">
										<PostDetailDescription />
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
			);
		}
	}

function mapStateToProps(state) {
  const {
    selectedCardID,
    cardData
  } = state;

  const cardDetail = cardData[selectedCardID];
  return {
    cardDetail
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ navigateScreen }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
