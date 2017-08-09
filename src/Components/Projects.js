import React, { Component } from 'react';
import uuid from 'uuid';

import Header from './Header';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
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
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects:projects});
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});
    }

    render() {
        return (
            <div className="app">
                <Header />
                <ProjectList projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <footer>Made by <span>GUI.</span>Developer</footer>
            </div>
        );
    }
}

export default Projects;
