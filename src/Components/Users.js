import React, { Component } from 'react';
import { getData } from '../api';

import Header from './Header';
import UserItem from './UserItem';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    getUsers() {
        getData((data) => {
            this.setState({
                users: JSON.parse(data),
            });
            console.log(this.state.users);
        });
    }

    componentWillMount() {
        this.getUsers();
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        let userItems;

        if(this.state.users){
            userItems = this.state.users.map(user => {
                return (
                    <UserItem user={user} key={user.id}/>
                );
            });
        }

        return (
            <div className="app">
                <Header />
                <h1 className="page-title">Users</h1>
                <ul className="users">
                    {userItems}
                </ul>
                <footer>Made by <span>GUI.</span>Developer</footer>
            </div>
        );
    }
}

export default Users;