import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';

describe('Item', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(
      <Item
        score={2}
        itemNum={1}
        barColors={['#ddd', '#ef4836', '#f6b44d', '#2b90ef', '#25c281']}
      />,
    );
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
