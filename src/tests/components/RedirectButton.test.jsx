/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import RedirectButton from '../../components/RedirectButton';
import { findByTestAttribute } from '../helper/index';

const setup = () => {
  const component = shallow(<RedirectButton />);
  return component;
};

describe('Redirect Button Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const element = findByTestAttribute(component, '.button');
    expect(element.length).toEqual(1);
  });
});
