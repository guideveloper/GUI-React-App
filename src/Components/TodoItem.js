import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    setComplete(id) {
        this.props.markComplete(id);
    }
    
    render() {
        return (
            <li className="todo">
                <div>{this.props.todo.task}</div>
                <button onClick={this.setComplete.bind(this, this.props.todo.id)}>Mark as complete</button>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem;
