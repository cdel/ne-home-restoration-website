import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: ''
    };
    this.onTitleChange = (e) => {
      e.preventDefault();
      this.setState({title: e.target.value});
    };
    this.onDescriptionChange = (e) => {
      e.preventDefault();
      this.setState({description: e.target.value});
    };
    this.onCreateTodo = (e) => {
      e.preventDefault();
      this.props.onAddTodo(Object.assign({}, this.state, {id: Date.now(), completed: false, date: (new Date().toLocaleDateString())}));
      this.setState({title: '', description: ''});
    };
  }
  render () { 
    return (
      <div>
        <label htmlFor="todo-title">
          <span>Title</span>
          <input type="text" value={this.state.title} onChange={this.onTitleChange} id="todo-title"/>
        </label>
        <label htmlFor="todo-description">
          <span>Description</span>
          <textarea name="description" value={this.state.description} onChange={this.onDescriptionChange} id="todo-description" cols="30" rows="10"></textarea>
        </label>
        <button onClick={this.onCreateTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;