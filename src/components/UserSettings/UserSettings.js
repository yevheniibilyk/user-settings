import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import _memoize from 'lodash.memoize';
import { Button, ListGroup } from 'react-bootstrap';
import { getSettings, getUser, updateUser } from '../../api';
import Setting from './Setting';
import './UserSettings.css';

class UserSettings extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: void 0,
      editedUser: void 0,
      settings: [],
      loading: true
    }
  }

  async componentDidMount () {
    const { match: { params } } = this.props;

    const [user, settings] = await Promise.all([
      getUser(params.id),
      getSettings()
    ]);

    this.setState({
      user,
      editedUser: { ...user },
      settings,
      loading: false
    });
  }

  onSettingChange = _memoize((settingId) => (value) => {
    const { editedUser } = this.state;

    this.setState({
      editedUser: {
        ...editedUser,
        settings: {
          ...editedUser.settings,
          [settingId]: value
        }
      }
    })
  });

  onSave = async () => {
    const { editedUser } = this.state;

    const updatedUser = await updateUser(editedUser);

    this.setState({
      user: updatedUser,
      editedUser: { ...updatedUser }
    });
  }

  render () {
    const { loading, user, editedUser, settings } = this.state;

    if (loading || !user || !editedUser) {
      return null;
    }

    const userSettingIds = Object.keys(editedUser.settings);

    const isSettingsChanged = userSettingIds.some(
      key => editedUser.settings[key] !== user.settings[key]
    );

    return (
      <div className="settings">
        <div className="settings__user-name">
          {user.name}
        </div>

        <ListGroup className="settings__list">
          {settings.map(setting => (
            <ListGroup.Item key={setting.name}>
            <Setting
              key={setting.name}
              setting={setting}
              onChange={this.onSettingChange(setting._id)}
              value={editedUser.settings[setting._id]}
              disabled={!userSettingIds.includes(setting._id)}
            />
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Button
          variant="success"
          className="settings__apply-btn"
          onClick={this.onSave}
          disabled={!isSettingsChanged}
        >
          Apply
        </Button>
      </div>
    )
  }
}

export default withRouter(UserSettings);
