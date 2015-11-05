import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import './barcode-input.css';

class BarcodeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { barcode: this.props.barcode };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = nextProps;
    let input = findDOMNode(this.refs.input);
    input.disabled = loading;
    input.focus();
  }

  render() {
    const { loading } = this.props;
    return (
      <div className='BarcodeInput'>
        <input
          className='BarcodeInput__input'
          onChange={this.onInputChange.bind(this)}
          onKeyPress={this.onInputKeypress.bind(this)}
          defaultValue={this.state.barcode}
          type='text'
          ref='input'
          autoFocus={true} />
        <button
          className='BarcodeInput__check-btn'
          onClick={this.onClickCheckBtn.bind(this)}
          disabled={loading}
          type='button'>Check</button>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ barcode: event.currentTarget.value });
  }

  onInputKeypress(event) {
    if (event.key === 'Enter') {
      this.checkBarcode();
    }
  }

  onClickCheckBtn(event) {
    this.checkBarcode();
  }

  checkBarcode() {
    this.props.actions.checkBarcode(this.state.barcode);
  }
}
BarcodeInput.propTypes = {
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  barcode: PropTypes.string
};

export default BarcodeInput;
