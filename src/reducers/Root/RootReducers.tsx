import { combineReducers } from 'redux';
import products from '../ProductsReducer';
import errors from '../ErrorReducer';
import loading from '../LoadingReducer';

export default combineReducers({
  products,
  errors,
  loading,
});
