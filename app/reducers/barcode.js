import { CHECK_BARCODE } from '../constants/ActionTypes';

const checkVisa = (barcode) => Math.floor(Math.random() * 10) > 5

const initialState = {
  barcode: '',
  ready: false
};

function barcode(state = initialState, action) {
  switch(action.type) {
    case CHECK_BARCODE:
      return {
        barcode: action.barcode,
        ready: checkVisa(action.barcode)
      };
    default:
      return state;
  }
}

export default barcode;
