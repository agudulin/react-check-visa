import React, { Component, PropTypes } from 'react';

import './barcode-input.css';

class BarcodeInput extends Component {
  render() {
    return (
      <div className='BarcodeInput'>
        <input className='BarcodeInput__input' type='text' />
        <button className='BarcodeInput__check-btn' type='button'>Check</button>
      </div>
    );
  }
}

export default BarcodeInput;
