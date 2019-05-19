import React from 'react';
import { shallow } from 'enzyme';
import PasswordStrengthBar from '../index';

describe('react-password-strength-bar', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<PasswordStrengthBar password="password" />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('changes the password', () => {
    component.setProps({
      password: 'Z[+*?M~&[7v7N#d]',
    });
    expect(component.state('score')).toBe(4);
  });
});
