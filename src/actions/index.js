const addCat = (cat) => ({
  type: 'ADD_CAT',
  id: cat.id,
  name: cat.name,
  description: cat.description,
  intelligence: cat.intelligence,
  image: cat.cfa_url,
  temperament: cat.temperament,
  adaptability: cat.adaptability,
  weight: cat.weight('metric'),
});

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

const changeRender = (render) => ({
  type: 'CHANGE_RENDER',
  render,
});

export { addCat, changeFilter, changeRender };
