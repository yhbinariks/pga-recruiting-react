import React from 'react';
import PropTypes from 'prop-types';

const PlayerRow = ({ player, onEdit, onDelete }) => (
  <tr>
    <td>{`${player.lastName}, ${player.firstName}`}</td>
    <td>{player.score}</td>
    <td>
      <button
        type="button"
        className="table__action-btn"
        onClick={onEdit('edit', player.id)}
      >
        Edit
      </button>
      <button
        type="button"
        className="table__action-btn"
        onClick={onDelete(player.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

const propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  player: PropTypes.shape({
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

PlayerRow.propTypes = propTypes;

export default PlayerRow;
