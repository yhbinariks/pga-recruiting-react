import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import TableHead from '../../../components/Table/TableHead';

describe('TableHead component', () => {
  it('snapshot', () => {
    const props = {
      setSortBy: jest.fn(),
    };
    const tableHead = shallow(
      <table>
        <TableHead {...props} />
      </table>,
    );
    expect(toJson(tableHead)).toMatchSnapshot();
  });
  it('sortByName', () => {
    const props = {
      setSortBy: jest.fn(),
    };
    const tableHead = mount(
      <table>
        <TableHead {...props} />
      </table>,
    );
    tableHead.find('th').at(0).simulate('click');
    expect(props.setSortBy).toHaveBeenCalledWith('name');
  });
  it('sortByScore', () => {
    const props = {
      setSortBy: jest.fn(),
    };
    const tableHead = mount(
      <table>
        <TableHead {...props} />
      </table>,
    );
    tableHead.find('th').at(1).simulate('click');
    expect(props.setSortBy).toHaveBeenCalledWith('score');
  });
});
