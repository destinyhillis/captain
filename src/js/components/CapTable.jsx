import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/actions';

const mapStateToProps = (state) => {
    return { 
    //   companyName: state.companyName,
    };
  };
  
    
class CapTable extends Component {
    render(){
        return(
            <div>
                Cap table here
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(CapTable);