import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <li className="todo">
                <div>{this.props.todo.title}</div>
                <button>Mark as complete</button>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem;
