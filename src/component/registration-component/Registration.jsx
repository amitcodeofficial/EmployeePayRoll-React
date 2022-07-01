import React, { Component } from 'react';
import './Registration.css';
import Header from './header-component/Header';
import Form from './form-component/Form';

export default class Registration extends Component {
  render() {
    return (
      <div className="registration">
        <Header />
        <Form />
      </div>
    )
  }
}
