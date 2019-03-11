import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import PlayerRow from '../../../components/Table/PlayerRow';

describe('PlayerRow component', () => {
  it('snapshot', () => {
    const props = {
      player: {
        firstName: 'petro3',
        lastName: 'chu3',
        score: 32,
        id: '1233',
      },
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    };
    const playerRow = shallow(
      <table>
        <tbody>
          <PlayerRow {...props} />
        </tbody>
      </table>,
    );
    expect(toJson(playerRow)).toMatchSnapshot();
  });

  it('edit click', () => {
    const props = {
      player: {
        firstName: 'petro3',
        lastName: 'chu3',
        score: 32,
        id: '1233',
      },
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    };
    const playerRow = mount(
      <table>
        <tbody>
          <PlayerRow {...props} />
        </tbody>
      </table>,
    );
    playerRow.find('button').at(0).simulate('click');

    expect(props.onEdit).toHaveBeenCalledWith('edit', props.player.id);
  });
  it('delete click', () => {
    const props = {
      player: {
        firstName: 'petro3',
        lastName: 'chu3',
        score: 32,
        id: '1233',
      },
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    };
    const playerRow = mount(
      <table>
        <tbody>
          <PlayerRow {...props} />
        </tbody>
      </table>,
    );
    playerRow.find('button').at(1).simulate('click');

    expect(props.onDelete).toHaveBeenCalledWith(props.player.id);
  });
});
