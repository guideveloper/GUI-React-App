import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends Component {
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
                <h1 className="page-title">Todo List</h1>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array
}

export default TodoList;
