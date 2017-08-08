import React, { Component } from 'react';
import uuid from 'uuid';

import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import { getData } from './api';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            todos: []
        }
    }

    getToDos() {
        getData((data) => {
            this.setState({
                todos: JSON.parse(data),
            });
        });
    }

    getProjects() {
        this.setState({projects: [
            {
                id:uuid.v4(),
                title: "Business Website",
                category: "Web Design"
            },
            {
                id:uuid.v4(),
                title: "Social App",
                category: "Mobile Development"
            },
            {
                id:uuid.v4(),
                title: "Ecommerce Shopping Cart",
                category: "Web Development"
            }
        ]});
    }

    componentWillMount() {
        this.getProjects();
        this.getToDos();
    }

    componentDidMount() {
        this.getToDos();
        
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects:projects});
    }

    render() {
        return (
        <div className="app">
            <header>
                <h1 className="heading"><span>GUI.</span>Developer</h1>
                <p>Projects and Todos</p>
            </header>
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            <AddProject addProject={this.handleAddProject.bind(this)}/>
            <Todos todos={this.state.todos}/>
            <footer>Made by <span>GUI.</span>Developer</footer>
        </div>
        );
    }
}

export default App;
