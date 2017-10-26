import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../Message';

Enzyme.configure({ adapter: new Adapter() });

describe("Message", () => {
  let props;
  let mountedMessage;
  const message = () => {
    if (!mountedMessage) {
      mountedMessage = mount(
          <Message {...props} />
      );
    }
    return mountedMessage;
  }

  beforeEach(() => {
    props = {
      text: undefined
    }
    mountedMessage = undefined;
  });
  
  it('always renders a div', () => {
    const divs = message().find('div');
    expect(divs.length).toBe(1);
  });

  describe('inside that div', () => {
    beforeEach(() => {
      props.text = 'a test message';
    })

    it('includes the correct text', () => {
      expect(message().props().text).toBe(props.text);
    })
  })
});