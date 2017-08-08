import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="project">
                <div>{this.props.project.title}</div>
                <div>{this.props.project.category}</div>
                <button onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}

export default ProjectItem;
