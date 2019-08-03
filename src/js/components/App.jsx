import React, { useState } from "react";
import { connect } from 'react-redux';
import OnboardingContainer from "./OnboardingContainer";
import DashboardContainer from "./DashboardContainer";


const mapStateToProps = (state) => {
  return { 
    // dashboardModalStatus: state.dashboardModalStatus,
  };
};

function App(){

  const [ctaClickStatus, setCtaClickStatus] = useState(false)


  const ctaOnClick = (e) => {
    setCtaClickStatus(!ctaClickStatus);
  };

  return (
    <div className="App">
      {
        !ctaClickStatus ?
        <div>
          <p>
          Captain by Admiral
          </p>
          <p>
            The easiest way to create and maintain your cap tables.
          </p>
          <p>
            We are invested in the growth of your startup. Let us help you keep track of all of your shareholders,
            from investors and founders to each employee. Our graphs and charts simplify your cap table and make 
            it easier to view and update.
          </p>
          <button onClick={ ctaOnClick }>GET STARTED</button>
        </div>
        :
        <div>
          <OnboardingContainer ctaClickStatus={ ctaClickStatus } />
        </div>
      }


      
    </div>
  
);
}


export default connect(mapStateToProps, null)(App);

