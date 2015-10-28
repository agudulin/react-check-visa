import * as types from '../constants/ActionTypes';

export function checkBarcode({ barcode }) {
  return { type: types.CHECK_BARCODE, barcode };
}
