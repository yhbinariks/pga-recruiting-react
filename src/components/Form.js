import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  player,
  action,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="player-form">
    <label className="player-form__label">
      <span className="player-form__label-text">First Name</span>
      <input defaultValue={player.firstName} name="firstName" type="text" required maxLength="255" />
    </label>
    <label className="player-form__label">
      <span className="player-form__label-text">Last Name</span>
      <input defaultValue={player.lastName} name="lastName" type="text" required maxLength="255" />
    </label>
    <label className="player-form__label">
      <span className="player-form__label-text">Score</span>
      <input defaultValue={player.score} name="score" type="number" min="0" max="100" required />
    </label>
    <button className="player-form__submit" type="submit">{action}</button>
  </form>
);

const defaultProps = {
  player: {
    firstName: '',
    lastName: '',
    score: 0,
  },
};

const propTypes = {
  player: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }),
  action: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;


export default Form;
