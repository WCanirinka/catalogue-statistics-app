/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { findByTestAttribute } from '../helper/index';

const setup = () => {
  const component = shallow(<Header.WrappedComponent />);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.header');
    expect(wrapper.length).toEqual(1);
  });

  it('should render a logo', () => {
    const logo = findByTestAttribute(component, '.icon');
    expect(logo.length).toEqual(1);
  });
});
