import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: {}
        }
    }

    handleSubmit(e) {
        if(this.refs.title.value === ''){
            alert('Task name is required!');
        }else{
            this.setState({newTodo: {
                id:uuid.v4(),
                task: this.refs.title.value
            }}, function(){
                this.props.addTodo(this.state.newTodo);
            });
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Add New Task</label>
                        <input type="text" ref="title" placeholder="Task Name"/>
                        <input type="submit" value="Add" />
                    </div>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func
}

export default AddTodo;
