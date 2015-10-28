import React, { Component, PropTypes } from 'react';

import './barcode-input.css';

class BarcodeInput extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      barcode: ''
    };
  }

  render() {
    return (
      <div className='BarcodeInput'>
        <input onChange={this.onInputChange.bind(this)} className='BarcodeInput__input' type='text' />
        <button onClick={this.onClickCheckBtn.bind(this)} className='BarcodeInput__check-btn' type='button'>Check</button>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ barcode: event.currentTarget.value });
  }

  onClickCheckBtn(event) {
    this.props.actions.checkBarcode({
      barcode: this.state.barcode
    });
  }
}

export default BarcodeInput;
