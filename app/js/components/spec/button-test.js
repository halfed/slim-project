

/*import {Calculator} from './index';

describe('Calculator', () => { 
  it('should add two numbers', () => { 
    let calculator = new Calculator(); 

    let sum = calculator.add(1,4); 

    expect(sum).toBe(5); 
  }); 

  it('should subtract two numbers', () => { 
    let calculator = new Calculator(); 

    let sum = calculator.subtract(4,1); 

    expect(sum).toBe(3); 
  }); 
});*/
import React from 'react';
import { shallow} from 'enzyme';

import Button from '../button';

describe('Button', () => {
  let wrapper;
  const props = {
    onClick: jasmine.createSpy('onClick'),
    label: 'SAVE'
  };

  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('should contain a `button` element', () => {
    expect(wrapper.is('button')).toBe(true);
  });

  it('should contain the label passed to it', () => {
    //console.log("button wrapper text: " + wrapper.text());
    expect(wrapper.text()).toBe(props.label);
  });

  it('should call the `onClick` handler when the button is clicked', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });
});
