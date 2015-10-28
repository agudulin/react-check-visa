import React, { Component, PropTypes } from 'react';
import { checkBarcode } from '../actions/barcode';

import './barcode-input.css';

class BarcodeInput extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { barcode: '' };
  }

  render() {
    const { loading } = this.props;
    return (
      <div className='BarcodeInput'>
        <input onChange={this.onInputChange.bind(this)} className='BarcodeInput__input' type='text' disabled={loading} />
        <button onClick={this.onClickCheckBtn.bind(this)} className='BarcodeInput__check-btn' type='button' disabled={loading}>Check</button>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ barcode: event.currentTarget.value });
  }

  onClickCheckBtn(event) {
    this.props.dispatch(checkBarcode({ barcode: this.state.barcode }));
  }
}

export default BarcodeInput;
