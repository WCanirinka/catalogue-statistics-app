/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/error';
import { findByTestAttribute } from '../helper/index';

const setup = (props = {}) => {
  const component = shallow(
    <NotFound showCatsPage={props.showCatsPage} />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    showMealsPage: () => null,
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.notFound');
    expect(wrapper.length).toEqual(1);
  });
});
