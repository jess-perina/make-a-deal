import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Win from '../Win';

Enzyme.configure({ adapter: new Adapter() });

describe("Win", () => {
  let props;
  let mountedWin;
  const win = () => {
    if (!mountedWin) {
      mountedWin = mount(
        <MemoryRouter>
          <Win {...props} />
        </MemoryRouter>
      );
    }
    return mountedWin;
  }

  beforeEach(() => {
    mountedWin = undefined;
  });
  
  it('always renders a div', () => {
    const divs = win().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('informs of win', () => {
    const text = win().find('h1').first().text();
    expect(text).toMatch('You Win!')
  });

  it('shows a video in iframe', () => {
    const video = win().find('iframe');
    expect(video.length).toBe(1);
  });

  it('has correct video url', () => {
    const iframe = win().find('iframe').first();
    const url = "https://www.youtube.com/embed/fzzjgBAaWZw";
    expect(iframe.props()).toHaveProperty('src', url);
  });

  it('includes one link', () => {
    const link = win().find('a');
    expect(link.length).toBe(1);
  })

  it('has a link back to the home page', () => {
    const link = win().find('a').first();
    expect(link.props()).toHaveProperty('href', '/');
  });
});