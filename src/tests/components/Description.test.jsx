/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Description from '../../components/Description';
import { findByTestAttribute } from '../helper/index';

const setup = (props = {}) => {
  const component = shallow(
    <Description description={props.description} />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    description: ['First', 'Second', 'Third'],
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.description');
    expect(wrapper.length).toEqual(1);
  });
});
