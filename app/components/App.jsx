import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import BarcodeInput from './BarcodeInput.jsx';
import * as BarcodeActions from '../actions/barcode';

import './app.css';

const LoadingLabel = ({ loading }) => (
  <div className='LoadingLabel'>
    { loading ? 'Loading...' : '' }
  </div>
);

const ReadyLabel = ({ ready }) => (
  <div className='ReadyLabel'>
    { ready ? 'Ready!' : '' }
  </div>
);

class App extends Component {
  render() {
    const { actions, barcode } = this.props;

    return (
      <div className={classNames('App', { 'App--success': barcode.ready })}>
        <div className='App__center'>
          <BarcodeInput actions={actions} loading={barcode.loading} barcode={barcode.barcode} />
          <LoadingLabel loading={barcode.loading} />
          <ReadyLabel ready={barcode.ready} />
        </div>
      </div>
    );
  }
}
App.propTypes = {
  actions: PropTypes.object.isRequired,
  barcode: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { barcode: state.barcode };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(BarcodeActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
