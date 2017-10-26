import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Doors from '../Doors';

Enzyme.configure({ adapter: new Adapter() });

describe("Doors", () => {
  let props;
  let mountedDoors;
  const doors = () => {
    if (!mountedDoors) {
      mountedDoors = mount(
          <Doors {...props} />
      );
    }
    return mountedDoors;
  }

  beforeEach(() => {
    props = {
      openDoor: undefined,
      doorClick: undefined
    }
    mountedDoors = undefined;
  });
  
  it('always renders a div', () => {
    const divs = doors().find('div');
    expect(divs.length).toBe(1);
  });

  describe('inside that div', () => {
    describe('renders doors properly', () => {
      beforeEach(() => {
        props.openDoor = 'blue Door';
      });

      it('renders three doors', () => {
        const div = doors().find('div').first();
        const numDoors = div.props().children.length
        expect(numDoors).toBe(3);
      });

      it('includes the correct open door', () => {
        expect(doors().props().openDoor).toBe(props.openDoor);
      });
  
    })
    
    describe('can handle changes on door click', () => {
      beforeEach(() => {
        props.doorClick = jest.fn()
      });
      
      it('includes an onClick handler', () => {
        expect(doors().props().doorClick).toBe(props.doorClick);
      });
    })
  })
});