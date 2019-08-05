import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/actions';

const mapStateToProps = (state) => {
    return { 
      shareholders: state.shareholders,
    };
  };
  
    
class CapTable extends Component {
    render(){
        console.log(this.props, 'cap table')

        const shareholderList = this.props.shareholders.map((shareholder, i) => {
            console.log(shareholder.startDate, 'start date')
            const dateString = shareholder.startDate.toString();
            

            return(
                <div id={ i }>
                    <div>
                        { shareholder.shareholderName }
                    </div>
                    <div>
                        { shareholder.type }
                    </div>
                    <div>
                        { shareholder.stock }
                    </div>
                    <div>
                        { shareholder.perShare }
                    </div>
                    <div>
                        { dateString }
                    </div>
                    <hr />
                </div>

            )
        })

        return(
            <div>
                { shareholderList }
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(CapTable);