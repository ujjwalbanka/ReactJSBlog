import { combineReducers } from 'redux';
import showScreen from './ShowScreenReducer';
import cardData from './CardDataReducer';
import selectedCardID from './SelectedCardId';

const rootReducer = combineReducers({
  showScreen,
  cardData,
  selectedCardID
});

export default rootReducer;
