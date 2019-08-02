import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/actions';


const mapStateToProps = (state) => {
  return { 
    companyName: state.companyName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 

  };
};
  
class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = {
    //   companyName: this.props.companyName
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log(e.target.value, 'hit function in container')
  }

    componentDidMount(){
    }

    render(){
      console.log(this.props)
      return (
        <div>
          <p>
          Captain by Admiral
          </p>
              <h1>{ this.props.companyName }</h1>
              <button type="button" onClick={this.handleSubmit}>click this button</button>
        </div>
      );
    }

  }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);