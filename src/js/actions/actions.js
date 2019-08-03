import { CREATE_COMPANY, DASHBOARD_TOGGLE, FORM_TOGGLE, CREATE_SHAREHOLDER } from "../constants/actionTypes";

export function createCompany(formData){
  return { type: CREATE_COMPANY, payload: formData }
};

export function dashboardModalToggle(){
  return { type: DASHBOARD_TOGGLE }
}

export function shareholderFormToggle(){
  return { type: FORM_TOGGLE }
}

export function createShareholder(formData){
  return { type: CREATE_SHAREHOLDER, payload: formData }
}