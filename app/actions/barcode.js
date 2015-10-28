import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

function requestCheckBarcode(barcode) {
  return { type: types.REQUEST_CHECK_BARCODE, barcode };
}

function recieveCheckBarcode(barcode, json) {
  return { type: types.RECIEVE_CHECK_BARCODE, ready: json.ready, barcode };
}

export function checkBarcode({ barcode }) {
  return dispatch => {
    dispatch(requestCheckBarcode(barcode));
    return fetch(`http://localhost:3000/api/check/${barcode}`, {credentials: 'include'})
      .then(response => response.json())
      .then(json => dispatch(recieveCheckBarcode(barcode, json)));
  };
}
