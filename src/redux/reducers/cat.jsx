import reduxActions from '../actions/index';

const { actions: { ADD_CATS } } = reduxActions;

const catReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CATS:
      return payload;
    default:
      return state;
  }
};

export default catReducer;
