import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Form from '../../components/Form';


describe('Form component', () => {
  it('snapshot defaultProps player', () => {
    const props = {
      action: 'add',
      onSubmit: jest.fn(),
    };
    const form = shallow(<Form {...props} />);
    expect(toJson(form)).toMatchSnapshot();
  });
  it('snapshot', () => {
    const props = {
      player: {
        firstName: 'petro',
        lastName: 'chu',
        score: 32,
      },
      action: 'add',
      onSubmit: jest.fn(),
    };
    const form = shallow(<Form {...props} />);
    expect(toJson(form)).toMatchSnapshot();
  });

  it('submit', () => {
    const props = {
      action: 'add',
      onSubmit: jest.fn(),
      player: {
        firstName: 'petro',
        lastName: 'chu',
        score: 32,
      },
    };
    const form = mount(<Form {...props} />);
    form.find('form').simulate('submit');
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });
});
