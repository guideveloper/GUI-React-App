import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
    render() {
        return (
            <li className="user">
                <div className="user__item">{this.props.user.name}</div>
                <div className="user__item">{this.props.user.email}</div>
                <div className="user__item">{this.props.user.phone}</div>
                <div className="user__item">{this.props.user.username}</div>
                <div className="user__item">{this.props.user.website}</div>
            </li>
        );
    }
}

UserItem.propTypes = {
    user: PropTypes.object
}

export default UserItem;
