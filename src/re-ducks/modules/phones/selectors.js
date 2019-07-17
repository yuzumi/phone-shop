import { createSelector } from 'reselect';
import { parseDecimal } from 'helpers';
import { constants, selectors } from 're-ducks/modules/sorting';
import { compare, compareNumbers } from 'helpers';

const { selectSorting } = selectors;
const { PARAMS } = constants;

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

const selectSortedPhones = createSelector(
  selectItems,
  selectSorting,
  (phones, { param, isAsc }) => {
    let sortedPhones = [];

    switch (param) {
      case PARAMS.TITLE:
        sortedPhones = phones.slice().sort((a, b) => compare(a['title'], b['title']));
        break;
      case PARAMS.PRICE:
        sortedPhones = phones.slice().sort((a, b) => compareNumbers(a['price'], b['price']));
        break;
      default:
        sortedPhones = phones.slice();
    }

    return isAsc
      ? sortedPhones
      : sortedPhones.reverse();
  }
);

export default {
  selectPhone,
  selectPhones,
  selectItems,
  selectCompanies,
  selectPrices,
  selectPriceRange,
  selectSortedPhones
};