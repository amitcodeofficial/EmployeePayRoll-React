import React, { Component } from "react";
import "./Dashboard.css";
import Details from "./details-component/Details";
import Header from "./header-component/Header";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <Details />
      </div>
    );
  }
}
