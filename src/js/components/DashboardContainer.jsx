import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShareholderForm from './ShareholderForm';
import {  } from '../actions/actions';
import CapTable from './CapTable';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';

const mapStateToProps = (state) => {
  return { 
    companyName: state.companyName,
    shareholderFormModalToggle: state.shareholderFormModalToggle,
  };
};

  
class DashboardContainer extends Component {
    render(){
      const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];

      

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
              <div>
                <svg viewBox="0 0 500 200">
                  <VictoryPie
                    standalone={false}
                    width={200} height={200}
                    data={[
                      { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
                    ]}
                    innerRadius={75} labelRadius={53}
                    style={{ labels: { fontSize: 20, fill: "white" } }}
                    colorScale={["#C3E1E5", "#A9D1D8", "#7BA6B4", "#2F4A57", "#1B212F"]}
                  />
                  <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 14 }}
                    x={100} y={100}
                    text="Shareholders"
                  />
                </svg>
                
                <CapTable />
              </div>
        </div>
      );
    }

  }

export default connect(mapStateToProps, null)(DashboardContainer);