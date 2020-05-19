
import reduxActions from '../actions/index';

const { actions: { ADD_CATEGORIES } } = reduxActions;


const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CATEGORIES:
      return payload;
    default:
      return state;
  }
};

export default categoryReducer;
