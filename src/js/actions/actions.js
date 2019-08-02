import { CREATE_COMPANY, DASHBOARD_TOGGLE } from "../constants/actionTypes";

export function createCompany(formData){
  return { type: CREATE_COMPANY, payload: formData }
};

export function dashboardModalToggle(){
  return { type: DASHBOARD_TOGGLE }
}