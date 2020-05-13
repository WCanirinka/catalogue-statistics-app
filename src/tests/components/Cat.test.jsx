/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Cat from '../../components/Cat';
import { findByTestAttribute } from '../helper/index';

const cat = {
  str: 'Abyssinian',
  strCatThumb: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
};

const setup = (props = {}) => {
  const component = shallow(<Cat.WrappedComponent meal={props.cat} history={props.history} />);
  return component;
};

describe('Cat Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      cat,
      history: {},
    };

    component = setup(props);
  });

  it('should render without errors', () => {
    const element = findByTestAttribute(component, '.cat');
    expect(element.length).toEqual(1);
    expect(component.find('img').props().src).toEqual(cat.strCatThumb);
    expect(component.find('h4').text()).toEqual(cat.strCat);
  });
});
