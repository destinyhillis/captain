import { CREATE_COMPANY, DASHBOARD_TOGGLE, FORM_TOGGLE, CREATE_SHAREHOLDER } from "../constants/actionTypes";

const initialState = {
  companyName: [],
  dashboardModalStatus: false,
  shareholderFormModalToggle: true,
  shareholders: []
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

  if (action.type === FORM_TOGGLE) {
    return Object.assign({}, state, {
      shareholderFormModalToggle: false
    });
  }

  if (action.type === CREATE_SHAREHOLDER) {
    console.log(action.payload, 'reducer')
    return Object.assign({}, state, {
      shareholders: state.shareholders.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;