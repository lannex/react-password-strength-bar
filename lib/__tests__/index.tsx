import React from 'react';
import { shallow } from 'enzyme';
import PasswordStrengthBar from '../index';

describe('index', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<PasswordStrengthBar password="password" />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
