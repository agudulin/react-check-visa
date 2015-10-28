import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BarcodeInput from './BarcodeInput.jsx';
import * as BarcodeActions from '../actions/barcode';

import './app.css';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions } = this.props;

    return (
      <div className='App'>
        <BarcodeInput actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(BarcodeActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
