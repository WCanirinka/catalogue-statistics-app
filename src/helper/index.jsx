/* eslint-disable arrow-parens */
/* eslint-disable import/no-unresolved */
import axios from '../actions/index';

const { catQuery, categoryQuery } = axios;

export const showCatsPage = props => props.history.push('/');

const getRandomAlphabet = () => {
  const alphabets = 'bcefghjklmnprstv'.split('');

  const randomNumber = Math.floor(Math.random() * 16);

  return alphabets[randomNumber];
};

const getCats = async () => {
  const randomAlphabet = getRandomAlphabet();
  try {
    const {
      data,
    } = await catQuery.get(`?f=${randomAlphabet}`);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const initialize = async props => {
  const {
    catReducer, addCategories, addCats, toggleSpinner, spinnerReducer,
  } = props;
  try {
    let cats;

    if (catReducer.length === 0) {
      cats = await getCats();
    } else {
      cats = catReducer;
    }

    const newCategories = [];
    const categories = await categoryQuery.get();
    if (categories) {
      categories.data.forEach((cat) => {
        if (!newCategories.includes(cat.origin)) newCategories.push(cat.origin);
      });
    }

    addCategories(newCategories);
    addCats(cats);

    if (spinnerReducer) {
      toggleSpinner();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
