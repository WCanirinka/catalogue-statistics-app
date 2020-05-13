/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import { findByTestAttribute } from '../helper/index';

const setup = () => {
  const component = shallow(<App />);
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.App');
    expect(wrapper.length).toEqual(1);
  });
});
