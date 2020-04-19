import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

describe('Component DaysToSummer', () => {
  it('shoudn render', () => {
    const date = new Date();
    const component = shallow(<DaysToSummer today={date} />);
    expect(component).toBeTruthy();
  });

  it('shoud render day counter outside a summer', () => {
    const date = new Date(2020, 4, 20);
    const component = shallow(<DaysToSummer today={date} />);
    expect(component.find('.summerCounter').text()).toMatch(/Days to summer/);
  });

  it('shoud calculate propely date', () => {
    // months start from 0
    const date = new Date(2020, 5, 20);
    const component = shallow(<DaysToSummer today={date} />);
    expect(component.find('.summerCounter').text()).toEqual(
      'Days to summer: 1'
    );
  });

  it("shoudn't render day counter outside a summer", () => {
    // months start from 0
    const date = new Date(2020, 8, 24);
    const component = shallow(<DaysToSummer today={date} />);
    expect(component.find('.summerCounter').text()).toMatch(/It's summer/);
  });
});
