import { combineReducers } from 'redux';
import cartReducer from 're-ducks/modules/cart';
import phonesReducer from 're-ducks/modules/phones';

const reducer = combineReducers({
  cart: cartReducer,
  phones: phonesReducer,
});

export default reducer;