import React, { Component } from 'react';
import uuid from 'uuid';

import Header from './Components/Header';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
//import { getData } from './api';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    getToDos() {
        // getData((data) => {
        //     this.setState({
        //         todos: JSON.parse(data),
        //     });
        // });
        this.setState({todos: [
            {
                id:uuid.v4(),
                task: "Layout initial sketches"
            },
            {
                id:uuid.v4(),
                task: "Wireframe up designs"
            },
            {
                id:uuid.v4(),
                task: "Setup project"
            },
        ]});
    }

    componentWillMount() {
        this.getToDos();
    }

    componentDidMount() {
        this.getToDos();
    }

    handleAddTodo(todo) {
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({todos:todos});
    }

    handleMarkComplete(id) {
        let todos = this.state.todos;
        let index = todos.findIndex(x => x.id === id);
        todos.splice(index, 1);
        this.setState({todos:todos});
    }

    render() {
        return (
        <div className="app">
            <Header />
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            <AddProject addProject={this.handleAddProject.bind(this)}/>
            <Todos todos={this.state.todos} markComplete={this.handleMarkComplete.bind(this)}/>
            <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
            <footer>Made by <span>GUI.</span>Developer</footer>
        </div>
        );
    }
}

export default App;
