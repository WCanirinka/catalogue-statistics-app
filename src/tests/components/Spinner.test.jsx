/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner';
import { findByTestAttribute } from '../helper/index';

const setup = () => {
  const component = shallow(<Spinner />);
  return component;
};

describe('Spinner Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const element = findByTestAttribute(component, '.loading');
    expect(element.length).toEqual(1);
  });
});
