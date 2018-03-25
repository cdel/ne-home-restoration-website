import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <span>{props.date}</span>
      <p>{props.description}</p>
      <button onClick={props.onDelete}>Delete</button>
      <button disabled={props.completed} onClick={props.onComplete}>Complete</button>
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
  date: PropTypes.string.isRequired
};

export default Todo;