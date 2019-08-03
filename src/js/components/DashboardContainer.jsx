import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShareholderForm from './ShareholderForm';
import {  } from '../actions/actions';


const mapStateToProps = (state) => {
  return { 
    companyName: state.companyName,
    shareholderFormModalToggle: state.shareholderFormModalToggle,
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

    render(){
      return (
        <div>
          <p>
          Captain by Admiral
          </p>
              <h1>{ this.props.companyName }</h1>
              {
                this.props.shareholderFormModalToggle ?
                  <ShareholderForm />
                :
                null
              }
        </div>
      );
    }

  }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);