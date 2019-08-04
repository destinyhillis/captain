import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { parseISO } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import { shareholderFormToggle, createShareholder } from "../actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    shareholderFormToggle: status => dispatch(shareholderFormToggle(status)),
    createShareholder: data => dispatch(createShareholder(data)),
  };
}

class ConnectedShareholderForm extends Component {
  constructor() {
    super();
    this.state = {
      shareholderName: "",
      type: "",
      stock: "",
      perShare: "",
      // date: new Date(),
      startDate: new Date()

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.id, 'id', e, 'e')
    this.setState({ 
      [e.target.id]: e.target.value,
      });
  };

  // GET DATE SELECTION TO WORK
  handleDateChange(date){
    this.setState({
      startDate: date
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createShareholder(this.state);
  };

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
            <select onChange={ this.handleChange } id="type">
              <option id="type" value="investor">Investor</option>
              <option id="type" value="founder">Founder</option>
              <option id="type" value="employee">Employee</option>
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
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDateChange}
              />

        </div>
        <button type="submit">
          Add Shareholder
        </button>
        <button type="reset" onClick={ this.props.shareholderFormToggle }>X</button>
      </form>
    );
  }
}
const ShareholderForm = connect(null, mapDispatchToProps)(ConnectedShareholderForm);
export default ShareholderForm;