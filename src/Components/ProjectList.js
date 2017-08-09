import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectItem from './ProjectItem';

class ProjectList extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        let projectItems;

        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} project={project} key={project.id}/>
                );
            });
        }

        return (
            <div className="projects">
                <h1 className="page-title">Latest Projects</h1>
                <ul>
                    {projectItems}
                </ul>
            </div>
        );
    }
}

ProjectList.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
}

export default ProjectList;
