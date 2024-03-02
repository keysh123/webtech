import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAILURE
  } from '../constants/contactConstant';
  
  // Reducer function for managing the contact form state
  export const contactReducer = (state = {}, action) => {
    switch (action.type) {
      case CONTACT_REQUEST:
        return { loading: true };
      case CONTACT_SUCCESS:
        return { loading: false, success: true, contact: action.payload };
      case CONTACT_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  