import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST } from '../ActionTypes'

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}
  
export function signInSuccess(token, username) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, username },
  };
}
  
  
export function signFailure() {
  return {
    type: SIGN_IN_FAILURE,
  };
}

export function singOutResquest(){
  return{
    type: SIGN_OUT_REQUEST,
  }
}

