import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './index.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import Users from './Components/Users';

class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="./" component={Home}/>
                    <Route path="./latest-projects" component={Projects}/>
                    <Route path="./todos" component={Todos}/>
                    <Route path="./users" component={Users} />
                </div>
            </Router>
        );
    }
}

export default Index;


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
