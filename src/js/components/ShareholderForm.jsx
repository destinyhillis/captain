import React, { Component } from "react";
import { connect } from "react-redux";
import { shareholderFormToggle } from "../actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    shareholderFormToggle: status => dispatch(shareholderFormToggle(status)),
  };
}

class ConnectedShareholderForm extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // this.props.createCompany(this.state.companyName);
    this.props.shareholderFormToggle();
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
            <select>
              <option value="investor">Investor</option>
              <option value="founder">Founder</option>
              <option value="employee">Employee</option>
            </select>
          <h3>Amount of Stock Owned</h3>
            <input
              type="text"
              id="stock"
              onChange={ this.handleChange }
            />
          <h3>Per Share Value</h3>
            <input
              type="text"
              id="perShare"
              onChange={ this.handleChange }
            />
          <h3>Date Given:</h3>
            <input
              type="text"
              id="date"
              onChange={ this.handleChange }
            />
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