import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <li className="todo">
                <div><strong>User ID:</strong> {this.props.todo.userId}</div>
                <div><strong>Task:</strong> {this.props.todo.title}</div>
                <div><strong>Completed:</strong> {this.props.todo.completed}</div>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem;
