import React from 'react';
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

function OnboardingContainer(dashboardModalStatus) {

    return (
      <div className="onboarding">
      {
        dashboardModalStatus ?
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
        null
      }
      {/* {
        !dashboardModalStatus ? */}
        <div>
            <DashboardContainer />
        </div>
        {/* :
        null
      } */}

      </div>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer);
