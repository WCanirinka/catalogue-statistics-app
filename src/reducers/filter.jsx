const filter = (state = 'NBA Players', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        value: action.filter,
      };
    default:
      return state;
  }
};

export default filter;
