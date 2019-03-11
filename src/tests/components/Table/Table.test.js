import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Table from '../../../components/Table/Table';

describe('Table component', () => {
  it('snapshot', () => {
    const props = {
      players: [
        {
          firstName: 'petro',
          lastName: 'chu',
          score: 32,
          id: '123',
        },
        {
          firstName: 'petro2',
          lastName: 'chu',
          score: 32,
          id: '1231',
        },
        {
          firstName: 'petro3',
          lastName: 'chu3',
          score: 32,
          id: '1233',
        },
      ],
      changeMode: jest.fn(),
      setSortBy: jest.fn(),
      onDelete: jest.fn(),
    };
    const table = shallow(<Table {...props} />);
    expect(toJson(table)).toMatchSnapshot();
  });
});
