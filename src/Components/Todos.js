import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        let todoItems;

        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem todo={todo} key={todo.title}/>
                );
            });
        }

        return (
            <div className="todos">
                <h3>Latest Todos</h3>
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
