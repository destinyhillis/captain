import { CREATE_COMPANY, DASHBOARD_TOGGLE } from "../constants/actionTypes";

const initialState = {
  companyName: [],
  dashboardModalStatus: false,
};
function rootReducer(state = initialState, action) {

  if (action.type === CREATE_COMPANY) {
    return Object.assign({}, state, {
      companyName: state.companyName.concat(action.payload)
    });
  }

  if (action.type === DASHBOARD_TOGGLE) {
    return Object.assign({}, state, {
      dashboardModalStatus: true
    });
  }

  return state;
}

export default rootReducer;