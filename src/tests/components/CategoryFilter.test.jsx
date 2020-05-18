/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import CategoryFilter from '../../components/CategoryFilter';
import { findByTestAttribute, categories } from '../helper/index';

const setup = (props = {}) => {
  const component = shallow(
    <CategoryFilter filter={props.filter} categories={props.categories} />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    filter: 'All Categories',
    categories,
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.catListContainer');
    const options = findByTestAttribute(component, 'option');
    expect(wrapper.length).toEqual(1);
    expect(options.length).toEqual(4);
  });
});
