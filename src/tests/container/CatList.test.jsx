/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import CatList from '../../containers/CatList';
import Cat from '../../components/Cat';
import Spinner from '../../components/Spinner';
import { findByTestAttribute } from '../helper/index';

const setup = () => {
  const component = shallow(
    <CatList.WrappedComponent />,
  );
  return component;
};

describe('CatList component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    expect(component.contains(<Spinner />)).toEqual(true);

    setTimeout(() => {
      const wrapper = findByTestAttribute(component, '.catListContainer');
      expect(wrapper.length).toBe(1);
      expect(wrapper.find(Cat)).toBeGreaterThan(1);
    }, 5000);
  });
});
