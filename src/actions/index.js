export const SHOW_SCREEN = 'SHOW_SCREEN';
export const SHOW_POST_DETAIL = 'SHOW_POST_DETAIL';

export function navigateScreen(screen) {
  return {
    type: SHOW_SCREEN,
    payload: screen
  };
}

export function showDeatilsPage(cardId) {
	return {
    type: SHOW_POST_DETAIL,
    payload: cardId
  };
}
