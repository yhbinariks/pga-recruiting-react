import React from 'react';
import PropTypes from 'prop-types';
import PlayerRow from './PlayerRow';
import TableHead from './TableHead';

const Table = ({
  players,
  onDelete,
  setSortBy,
  changeMode,
}) => (
  <table>
    <TableHead setSortBy={setSortBy} />
    <tbody>
      {players.map(player => (
        <PlayerRow
          key={player.id}
          player={player}
          onDelete={onDelete}
          onEdit={changeMode}
        />
      ))}
    </tbody>
  </table>
);

const propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  changeMode: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Table.propTypes = propTypes;

export default Table;
