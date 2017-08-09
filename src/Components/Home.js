import React, { Component } from 'react';

import Header from './Header';

class Home extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <h1 className="page-title">Home</h1>
                <footer>Made by <span>GUI.</span>Developer</footer>
            </div>
        );
    }
}

export default Home;
