import { combineReducers } from 'redux';
import phonesReducer from 're-ducks/modules/phones';

const reducer = combineReducers({
  phones: phonesReducer,
});

export default reducer;