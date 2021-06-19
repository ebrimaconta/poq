import { FETCH_PRODUCTS_SUCCESS } from '../actions/ActionsGetProducts';

export default function productReducer(state = {}, action: any) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchproducts: action.payload.products,
      };
    case 'DELETE_IDS':
      const copyState = Object.assign(state);
      const myArrayFiltered = copyState.fetchproducts?.filter(
        (el: { productId: number }) => {
          return !action.payload.some((f: { id: number }) => {
            return +f.id === el.productId;
          });
        }
      );
      return {
        ...state,
        fetchproducts: myArrayFiltered,
      };

    default:
      return state;
  }
}
