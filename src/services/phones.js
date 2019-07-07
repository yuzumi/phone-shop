import axios from 'axios';

const url = 'http://localhost:3000/data.json';

const phones = {
  getAll() {
    return axios.get(url);
  },
};

export default phones;