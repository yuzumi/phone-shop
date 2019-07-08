import { createSelector } from 'reselect';
import { parseDecimal } from 'helpers';

const selectPhones = state => (
  state && 
  state.phones && 
  state.phones
) || {};


const selectItems = createSelector(
  selectPhones,
  phones => (phones.items && phones.items) || []
);

const selectPhone = (state, props) => 
  selectItems(state).find(item => item.id === parseDecimal(props.match.params.id));

const selectCompanies = createSelector(
  selectItems,
  items => [...new Set(items.map(item => item.company))]
);

const selectPrices = createSelector(
  selectItems,
  items => [...new Set(items.map(item => item.price))]
);

const selectPriceRange = createSelector(
  selectPrices,
  prices => {
    const sortedPrices = prices.slice().sort((a, b) => a - b);

    return {
      min: sortedPrices[0],
      max: sortedPrices[sortedPrices.length - 1]
    };
  }
);

export default {
  selectPhone,
  selectPhones,
  selectItems,
  selectCompanies,
  selectPrices,
  selectPriceRange
};