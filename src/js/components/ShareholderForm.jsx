import React, { Component } from "react";
import { connect } from "react-redux";
import {  } from "../actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    // createCompany: name => dispatch(createCompany(name)),
  };
}

class ConnectedShareholderForm extends Component {
  constructor() {
    super();
    this.state = {
      shareholderFormModalToggle: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createCompany(this.state.companyName);
    this.props.dashboardModalToggle();
  }
  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h3>Shareholder Name:</h3>
          <input
            type="text"
            id="shareholderName"
            onChange={ this.handleChange }
          />
          <h3>Shareholder type:</h3>
          Dropdown (investors, founders, employees)
          <h3>Amount of Stock Owned</h3>
          <h3>Per Share Value</h3>
          <h3>Date Given:</h3>
        </div>
        <button type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}
const ShareholderForm = connect(null, mapDispatchToProps)(ConnectedShareholderForm);
export default ShareholderForm;