import { SHOW_SCREEN, SHOW_POST_DETAIL } from '../actions';

const INITIAL_STATE = 'home';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
	case SHOW_SCREEN:
		return action.payload;
	case SHOW_POST_DETAIL:
		return 'details';
  default:
    return state;
  }
}
