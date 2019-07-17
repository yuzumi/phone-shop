import { createSelector } from 'reselect';

const selectSorting = state => state.sorting;

const selectSortingParam = createSelector(
  selectSorting,
  sorting => sorting.param,
);

const selectSortingAsc = createSelector(
  selectSorting,
  sorting => sorting.isAsc,
);

export default {
  selectSorting, 
  selectSortingParam,
  selectSortingAsc,
};