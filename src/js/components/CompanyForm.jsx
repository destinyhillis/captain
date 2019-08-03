import React, { Component } from "react";
import { connect } from "react-redux";
import { createCompany, dashboardModalToggle } from "../actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    createCompany: name => dispatch(createCompany(name)),
    dashboardModalToggle: clickEvent => dispatch(dashboardModalToggle(clickEvent))
  };
}

const mapStateToProps = (state) => {
  return { 
    dashboardModalStatus: state.dashboardModalStatus,
  };
};

class ConnectedCompanyForm extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      dashboardModalStatus: true,
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
    this.props.dashboardModalToggle(this.state.dashboardModalToggle);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h3>Company Name:</h3>
          <input
            type="text"
            id="companyName"
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
const CompanyForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedCompanyForm);
export default CompanyForm;