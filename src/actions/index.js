import axios from 'axios';

const { REACT_APP_CAT_URL, REACT_APP_CATEGORY_URL } = process.env;

const catQuery = axios.create({
  baseURL: REACT_APP_CAT_URL,
});

const categoryQuery = axios.create({
  baseURL: REACT_APP_CATEGORY_URL,
});

export default { catQuery, categoryQuery };
