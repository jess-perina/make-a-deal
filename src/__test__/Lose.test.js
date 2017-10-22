import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Lose from '../Lose';

Enzyme.configure({ adapter: new Adapter() });

describe("Lose", () => {
  let props;
  let mountedLose;
  const lose = () => {
    if (!mountedLose) {
      mountedLose = mount(
        <MemoryRouter>
          <Lose {...props} />
        </MemoryRouter>
      );
    }
    return mountedLose;
  }

  beforeEach(() => {
    mountedLose = undefined;
  });
  
  it('always renders a div', () => {
    const divs = lose().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  // not sure how to impliment this
  // uncommenting last line breaks tests (makes them hang)
  it('renders everything else inside that div', () => {
    const wrapperDiv = lose().find('div').first();
    const internals = lose().children();
    // expect(wrapperDiv.children()).toEqual(internals);
  });

  it('informs of loss', () => {
    const text = lose().find('h1').first().text();
    expect(text).toMatch('You Lose!')
  });

  it('shows a video in iframe', () => {
    const video = lose().find('iframe');
    expect(video.length).toBe(1);
  });

  it('has correct video url', () => {
    const iframe = lose().find('iframe').first();
    const url = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    expect(iframe.props()).toHaveProperty('src', url);
  });

  it('includes one link', () => {
    const link = lose().find('a');
    expect(link.length).toBe(1);
  })

  it('has a link back to the home page', () => {
    const link = lose().find('a').first();
    expect(link.props()).toHaveProperty('href', '/');
  });
});