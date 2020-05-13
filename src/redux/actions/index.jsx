const actions = {
  ADD_CATS: 'ADD_CATS',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
  TOGGLE_SPINNER: 'TOGGLE_SPINNER',
  CHANGE_FILTER: 'CHANGE_FILTER',
};

const addCats = cats => ({
  type: actions.ADD_CATS,
  payload: cats,
});

const addCategories = (categories) => ({
  type: actions.ADD_CATEGORIES,
  payload: categories,
});

const toggleSpinner = () => ({
  type: actions.TOGGLE_SPINNER,
});

const changeFilter = (filter) => ({
  type: actions.CHANGE_FILTER,
  payload: filter,
});

export default {
  actions, addCats, addCategories, toggleSpinner, changeFilter,
};
