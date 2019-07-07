import actions from 're-ducks/modules/phones/actions';
import phonesService from 'services/phones';
import { wait } from 'helpers';

const fetchPhones = () => dispatch => {
  dispatch(actions.fetchPhonesRequest());

  phonesService
    .getAll()
    .then(response => {
      wait(1000)
        .then(() => {
          dispatch(actions.fetchPhonesSuccess(response.data));
        });
    })
    .catch(error => {
      dispatch(actions.fetchPhonesFailure(error));
    });
};

export default {
  fetchPhones,
};