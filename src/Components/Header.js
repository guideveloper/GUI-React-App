import React, { Component } from 'react';

import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="heading"><span>GUI.</span>Developer</h1>
                <p>Projects and Todos</p>
                <Navigation />
            </header>
        );
    }
}

export default Header;
