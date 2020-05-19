import reduxActions from '../actions/index';

const { actions: { TOGGLE_SPINNER } } = reduxActions;


const spinnerReducer = (state = true, { type }) => {
  switch (type) {
    case TOGGLE_SPINNER:
      return !state;
    default:
      return state;
  }
};

export default spinnerReducer;
