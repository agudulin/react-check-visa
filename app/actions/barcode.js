import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';
import * as routes from '../constants/Routes';

function requestCheckBarcode(barcode) {
  return { type: types.REQUEST_CHECK_BARCODE, barcode };
}

function recieveCheckBarcode(barcode, json) {
  return {
    type: types.RECIEVE_CHECK_BARCODE,
    pdfLink: json.pdfLink,
    ready: json.result,
    barcode
  };
}

export function checkBarcode(barcode) {
  return dispatch => {
    dispatch(requestCheckBarcode(barcode));
    return fetch(`${routes.CHECK_BARCODE}/${barcode}`)
      .then(response => response.json())
      .then(json => dispatch(recieveCheckBarcode(barcode, json)));
  };
}
