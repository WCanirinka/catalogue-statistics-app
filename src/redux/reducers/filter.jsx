import reduxActions from '../actions/index';

const { actions: { CHANGE_FILTER } } = reduxActions;


const filterReducer = (state = 'All Categories', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      if (payload !== 'All Categories') {
        return payload;
      }

      return 'All Categories';
    default:
      return state;
  }
};

export default filterReducer;
