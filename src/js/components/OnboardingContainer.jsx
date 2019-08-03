import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardContainer from './DashboardContainer';
import CompanyForm from './CompanyForm';

const mapStateToProps = (state) => {
  return { 
    dashboardModalStatus: state.dashboardModalStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
  };
};

class OnboardingContainer extends Component {
    constructor(){
        super();
        this.state = {
            dashboardModalStatus: "",
        }
    }
    componentDidMount(){
        this.checkDashboardModal()
    }
    checkDashboardModal = () => {
        console.log(this.state, this.props, 'dashboard check')
    }

    render(){
        return (
            <div className="onboarding">
            {/* {
              dashboardModalStatus ? */}
              <div>
                <p>
                Captain by Admiral
                </p>
                <h1>Sign Up</h1>
                <p>
                  Let us take the take the hard part out of creating cap tables for your business.
                </p>
                <CompanyForm />
              </div>
              :
              <DashboardContainer />
            }
        
            </div>
          );
    }
    
  }

  export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer);
