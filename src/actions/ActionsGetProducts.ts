export const FETCH_LOADING = 'LOADING_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'ITEMS_HAS_ERRORED';

export function productsIsLoading(bool) {
  return {
    type: FETCH_LOADING,
    isLoading: bool,
  };
}
export const fetchProductsSuccess = (products: any) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export function productsHasErrored(bool) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    hasErrored: bool,
  };
}

export const fetchGetProductsFn = () => {
  return (dispatch: any) => {
    dispatch(productsIsLoading(true));
    return fetch(
      'https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e',
      {
        method: 'GET',
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(productsIsLoading(false));
        return response;
      })
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(() => dispatch(productsHasErrored(true)));
  };
};
