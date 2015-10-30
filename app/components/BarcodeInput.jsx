import React, { Component, PropTypes } from 'react';

import './barcode-input.css';

class BarcodeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { barcode: this.props.barcode };
  }

  render() {
    const { loading } = this.props;
    return (
      <div className='BarcodeInput'>
        <input onChange={this.onInputChange.bind(this)} className='BarcodeInput__input' type='text' disabled={loading} defaultValue={this.state.barcode} />
        <button onClick={this.onClickCheckBtn.bind(this)} className='BarcodeInput__check-btn' type='button' disabled={loading}>Check</button>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ barcode: event.currentTarget.value });
  }

  onClickCheckBtn(event) {
    this.props.actions.checkBarcode(this.state.barcode);
  }
}
BarcodeInput.propTypes = {
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  barcode: PropTypes.string
};

export default BarcodeInput;
