import actions from 're-ducks/modules/phones/actions';
import phonesService from 'services/phones';

const fetchPhones = () => dispatch => {
  dispatch(actions.fetchPhonesRequest());

  phonesService
    .getAll()
    .then(response => {
      dispatch(actions.fetchPhonesSuccess(response.data));
    })
    .catch(error => {
      dispatch(actions.fetchPhonesFailure(error));
    });
};

export default {
  fetchPhones,
};