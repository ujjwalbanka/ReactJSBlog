const INITIAL_STATE = {
					card1: {
						imgSrc: 'http://akanksharedhu.com/wp-content/uploads/2016/09/DSC6815-copy.jpg',
						category: 'FASHION',
						heading: 'Dark House',
						time: '19, Sept',
						readTime: '1 min read',
						totalReader: '10 readers',
						description: 'While I know Dark Horse is supposed to invoke a sense of poetry or romance, Ive been feeling quite like a horse lately – with the amount of work that I can sense is going to be piling up in the coming month. ',
						readMoreLink: ''
					},
					card2: {
						imgSrc: 'http://akanksharedhu.com/wp-content/uploads/2016/09/DSC6815-copy.jpg',
						category: 'TECHNOLOGY',
						heading: 'Dark House',
						time: '22, Sept',
						readTime: '10 min read',
						totalReader: '20 readers',
						description: 'While I know Dark Horse is supposed to invoke a sense of poetry or romance, Ive been feeling quite like a horse lately – with the amount of work that I can sense is going to be piling up in the coming month. ',
						readMoreLink: ''
					},
					card3: {
						imgSrc: 'http://akanksharedhu.com/wp-content/uploads/2016/09/DSC6815-copy.jpg',
						category: 'FINTECH',
						heading: 'Dark House',
						time: '25, May',
						readTime: '20 min read',
						totalReader: '50 readers',
						description: 'While I know Dark Horse is supposed to invoke a sense of poetry or romance, Ive been feeling quite like a horse lately – with the amount of work that I can sense is going to be piling up in the coming month. ',
						readMoreLink: ''
					}
				};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}
