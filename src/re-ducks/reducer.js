import { combineReducers } from 'redux';
import cartReducer from 're-ducks/modules/cart';
import viewReducer from 're-ducks/modules/view';
import phonesReducer from 're-ducks/modules/phones';

const reducer = combineReducers({
  cart: cartReducer,
  view: viewReducer,
  phones: phonesReducer,
});

export default reducer;