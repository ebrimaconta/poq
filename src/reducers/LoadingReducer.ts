import { FETCH_LOADING } from '../actions/ActionsGetProducts';

export default function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
