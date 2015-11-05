import {
  REQUEST_CHECK_BARCODE,
  RECIEVE_CHECK_BARCODE } from '../constants/ActionTypes';

const initialState = {
  barcode: '',
  ready: false,
  loading: false
};

function barcode(state = initialState, action) {
  switch(action.type) {
    case REQUEST_CHECK_BARCODE:
      return {
        barcode: action.barcode,
        loading: true
      };
    case RECIEVE_CHECK_BARCODE:
      return {
        barcode: action.barcode,
        ready: action.ready,
        pdfLink: action.pdfLink,
        loading: false
      };
    default:
      return state;
  }
}

export default barcode;
