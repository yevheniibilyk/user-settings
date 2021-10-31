import React, { Component } from 'react';
import _memoize from 'lodash.memoize';
import { ListGroup } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { getUsers } from '../../api';
import './UsersPage.css';

class UsersPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: []
    };
  }

  async componentDidMount () {
    const users = await getUsers();

    this.setState({ users });
  }

  onUserClick = _memoize((userId) => () => {
    const { history } = this.props;

    history.push(`/user/${userId}`);
  })

  render () {
    const { users } = this.state;

    return (
      <div className="users-page">
        <ListGroup className="users-page-list">
          {users.map(user => (
            <ListGroup.Item action
              key={user._id}
              onClick={this.onUserClick(user._id)}
            >
              {user.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default withRouter(UsersPage);
