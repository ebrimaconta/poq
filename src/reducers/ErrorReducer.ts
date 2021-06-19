import { FETCH_PRODUCTS_FAILURE } from '../actions/ActionsGetProducts';

export default function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_FAILURE:
      return action.hasErrored;
    default:
      return state;
  }
}
