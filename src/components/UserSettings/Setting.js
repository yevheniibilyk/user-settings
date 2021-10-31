import React, { Component } from 'react';
import _capitalize from 'lodash.capitalize';
import { InputGroup, FormControl, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import './Setting.css';

class Setting extends Component {
  renderSettingByType = () => {
    const { setting: { name, type, values }, value, disabled, onChange } = this.props;

    if (type === 'STRING') {
      return (
        <InputGroup>
          <FormControl
            value={value}
            onChange={({ target }) => onChange(target.value)}
            placeholder={name}
            aria-label={name}
            aria-describedby="basic-addon1"
            disabled={disabled}
          />
        </InputGroup>
      );
    }

    if (type === 'NUMBER') {
      return (
        <InputGroup>
          <FormControl
            type="number"
            value={value}
            onChange={({ target }) => onChange(
              Number.parseInt(target.value, 10)
            )}
            placeholder={name}
            aria-label={name}
            aria-describedby="basic-addon1"
            disabled={disabled}
          />
        </InputGroup>
      );
    }

    if (type === 'CHECKBOX') {
      return (
        <Form>
          <Form.Check
            checked={value}
            onChange={({ target }) => onChange(target.checked)}
            type="checkbox"
            id="default-checkbox"
            disabled={disabled}
          />
        </Form>
      );
    }

    if (type === 'RADIO') {
      return (
        <Form>
          {values.map(radioValue => (
            <Form.Check
              key={radioValue}
              checked={value === radioValue}
              onChange={() => onChange(radioValue)}
              type="radio"
              label={radioValue}
              id="default-radio"
              disabled={disabled}
            />
          ))}
        </Form>
      );
    }

    if (type === 'DROPDOWN') {
      return (
        <DropdownButton
          id="dropdown-basic-button"
          title={value || `Select ${name}`}
          disabled={disabled}
        >
          {values.map(valueItem => (
            <Dropdown.Item
              key={valueItem}
              onClick={() => onChange(valueItem)}
            >
              {valueItem}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      );
    }
  }

  render () {
    const { setting: { name } } = this.props;

    return (
      <div className="setting">
        <div className="setting__name">
          {_capitalize(name)}
        </div>
        <div className="setting__control">
          {this.renderSettingByType()}
        </div>
      </div>
    )
  }
}

export default Setting
