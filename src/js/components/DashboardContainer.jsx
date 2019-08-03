import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShareholderForm from './ShareholderForm';
import {  } from '../actions/actions';
import CapTable from './CapTable';


const mapStateToProps = (state) => {
  return { 
    companyName: state.companyName,
    shareholderFormModalToggle: state.shareholderFormModalToggle,
  };
};

  
class DashboardContainer extends Component {
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
              <CapTable />
        </div>
      );
    }

  }

export default connect(mapStateToProps, null)(DashboardContainer);