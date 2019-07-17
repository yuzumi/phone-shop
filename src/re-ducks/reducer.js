import { combineReducers } from 'redux';
import cartReducer from 're-ducks/modules/cart';
import viewReducer from 're-ducks/modules/view';
import phonesReducer from 're-ducks/modules/phones';
import sortingReducer from 're-ducks/modules/sorting';

const reducer = combineReducers({
  cart: cartReducer,
  view: viewReducer,
  phones: phonesReducer,
  sorting: sortingReducer,
});

export default reducer;