export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

export const cats = [
  {
    name: 'Cat Twenty',
    id: 22,
  },
  {
    name: 'Cat one',
    id: 1,
  },
];

export const categories = ['First', 'Second', 'Third'];
