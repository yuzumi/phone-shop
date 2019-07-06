import actions from 're-ducks/modules/phones/actions';

const fetchPhones = () => dispatch => {
  dispatch(actions.fetchPhonesRequest());

  fetch('http://localhost:3000/data.json')
    .then(response => response.json())
    .then(data => {
      dispatch(actions.fetchPhonesSuccess(data));
    })
    .catch(error => {
      dispatch(actions.fetchPhonesFailure(error));
    });
};

export default {
  fetchPhones,
};