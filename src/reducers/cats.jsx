const catReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAT':
      return ([...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          image: action.image,
          intelligence: action.intelligence,
          temperament: action.temperament,
          adaptability: action.adaptability,
          weight: action.weight,
        }]);
    default:
      return state;
  }
};

export default catReducer;
