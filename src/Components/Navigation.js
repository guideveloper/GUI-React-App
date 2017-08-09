import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="/latest-projects" className="nav__link">Latest Projects</a></li>
                <li className="nav__item"><a href="/todos" className="nav__link">Todos</a></li>
                <li className="nav__item"><a href="/users" className="nav__link last">Users</a></li>
            </ul>
        );
    }
}

export default Navigation;
