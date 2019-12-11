import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';
import { Link } from 'react-router-dom';

describe('Component Hero', () => {
  //czy jest wywoływany błąd w przypadku braku któregokolwiek z propsów
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  //czy generowany jest link do poprawnego adresu
  it('generate propely link', () => {
    const component = shallow(
      <TripSummary
        name={'super trip'}
        days={12}
        cost={'100'}
        tags={['skiing']}
        id={1}
      />
    );
    const linkComponent = component.find(Link).prop('to');
    expect(linkComponent).toEqual('/trip/1');
  });

  //czy <img> ma poprawne src i alt
  it('has accurate src and alt', () => {
    const name = 'Marvelous travel in fantastic Timor-Leste';
    const component = shallow(
      <TripSummary
        name={'Marvelous travel in fantastic Timor-Leste'}
        days={12}
        cost={'100'}
        tags={['skiing']}
        id={1}
      />
    );
    const src = component.find('.component img').prop('src');
    const alt = component.find('.component img').prop('alt');
    // console.log(src.debug());
    expect(alt).toEqual(name);
    expect(src).not.toBeNaN();
  });

  //czy poprawnie renderują się propsy name, cost i days
  it('should render correct title and image', () => {
    const expectedName = 'Super trip';
    const expectedDays = 12;
    const expectedCost = '100';
    const component = shallow(
      <TripSummary
        name={expectedName}
        days={expectedDays}
        cost={expectedCost}
        tags={['skiing']}
      />
    );

    const renderedName = component.find('.title').text();
    const renderedDays = component.find('[data-testId="days"]').text();
    const renderedCost = component.find('[data-testId="cost"]').text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedDays).toContain(expectedDays);
    expect(renderedCost).toContain(expectedCost);
  });

  //Testy tagów w TripSummary
  it('correct render tags', () => {
    const tags = ['spa', 'beach'];
    const component = shallow(
      <TripSummary
        name={'super trip'}
        days={12}
        cost={'100'}
        tags={tags}
        id={1}
      />
    );
    const firstTag = component
      .find('.tags .tag')
      .at(0)
      .text();
    const secondTag = component
      .find('.tags .tag')
      .at(1)
      .text();
    expect(firstTag).toEqual(tags[0]);
    expect(secondTag).toEqual(tags[1]);
  });

  //props tags jest fałszywy nie powinno renderowac div.tags
  it('shouldnt render div tags without tags', () => {
    const tags = [];
    const component = shallow(
      <TripSummary
        name={'super trip'}
        days={12}
        cost={'100'}
        tags={tags}
        id={1}
      />
    );
    const tagsDiv = component.find('article .tags');
    expect(tagsDiv).toEqual({});
  });
});
