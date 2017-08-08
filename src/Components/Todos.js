import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class Todos extends Component {
    setComplete(id) {
        this.props.markComplete(id);
    }

    render() {
        let todoItems;

        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem todo={todo} key={todo.id} markComplete={this.setComplete.bind(this)}/>
                );
            });
        }

        return (
            <div className="todos">
                <h3>Todo List</h3>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array
}

export default Todos;
