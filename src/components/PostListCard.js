import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateScreen, showDeatilsPage } from '../actions';

class PostList extends Component {
	render() {
		const { cardData, cardId } = this.props;
		return (
			<div className='list-card'>
				<div className='list-header'>

				</div>
				<div className='list-image-holder'>
					<img src={cardData[cardId].imgSrc} />
				</div>
				<div className='list-data'>
					<div className='container card-list-detail'>
						<p className='text-center color-silver'><b>{cardData[cardId].category}</b></p>
						<h2 className='card-heading'>{cardData[cardId].heading}</h2>
						<div>
							<ul className='meta-data'>
								<li>{cardData[cardId].time}</li>
								<li className="meta-pipe">|</li>
								<li>{cardData[cardId].readTime}</li>
								<li className="meta-pipe">|</li>
								<li>{cardData[cardId].totalReader}</li>
							</ul>
						</div>
						<p className='color-silver list-description'>
							{cardData[cardId].description}
						</p>
						<div 
							className='read-more-link'
							onClick={() => this.props.showDeatilsPage(cardId)}
						>
							Read More...
						</div>
					</div>
					<div className='container card-footer col-xs-12'>
						<div className="footer-image-holder col-xs-2"> 
							<img 
								width="40" 
								height="40" 
								src="https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/s150x150/14052730_1844274775899392_1121993159_a.jpg" 
								alt=""
							/> 
						</div>
						<div className="item-inner col-xs-10">
							<div className="item-title-row">
								<div className="author">
									<span>Akanksha Redhu</span>
									<br />

								</div>
							</div>
							<div className="time">
								<i className="fa fa-star-o" /> 
								<span>19 subscribers</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
  const {
    cardData
  } = state;
  return {
    cardData
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ navigateScreen, showDeatilsPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
