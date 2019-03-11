import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ setSortBy }) => (
  <thead>
    <tr>
      <th onClick={() => setSortBy('name')}>Name</th>
      <th onClick={() => setSortBy('score')}>Score</th>
      <th />
    </tr>
  </thead>
);

const propTypes = {
  setSortBy: PropTypes.func.isRequired,
};

TableHead.propTypes = propTypes;

export default TableHead;
