import { local } from 'store';
import {SET_PROFILE, SET_LOGGED_IN_USER, SET_LOGOUT, UPDATE_PROFILE} from '../actionsTypes';

export const setAuthenticated = (userid:any) => (dispatch:any) => {
  return dispatch({type: SET_LOGGED_IN_USER, payload: userid});
};


export const setUserProfile = (data:any) => (dispatch:any) => {
  return dispatch({type: SET_PROFILE, payload: data});
};

export const updateProfilePicture = (data:any) => (dispatch:any) => {
  return dispatch({type: UPDATE_PROFILE, payload: data});
};


export const logout = () => (dispatch:any) => {
  local.remove(local.keys.AUTH)
  return dispatch({type: SET_LOGOUT,});
};
