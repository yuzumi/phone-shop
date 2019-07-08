const selectView = state => (
  state &&
  state.view &&
  state.view
) || '';

const isCurrentView = state => {
  const currentView = selectView(state);

  return view => view === currentView;
};

export default {
  selectView,
  isCurrentView
};