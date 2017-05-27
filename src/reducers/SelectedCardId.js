import { SHOW_POST_DETAIL } from '../actions';

const INITIAL_STATE = '';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case SHOW_POST_DETAIL:
		return action.payload;
  default:
    return state;
  } 
}
