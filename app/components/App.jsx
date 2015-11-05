import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import BarcodeInput from './BarcodeInput.jsx';
import * as BarcodeActions from '../actions/barcode';

import './app.css';

const LoadingLabel = () => (
  <div className='LoadingLabel'>
    Loading...
  </div>
);

const ReadyLabel = ({ ready, pdfLink }) => (
  <div className='ReadyLabel'>
    { ready ? 'Ready!' : 'Nope.' }
    { pdfLink ? <a href={pdfLink} className='ReadyLabel__pdf' target='_blank'>pdf</a> : '' }
  </div>
);

class App extends Component {
  render() {
    const { actions, barcode } = this.props;

    return (
      <div className={classNames('App', { 'App--success': barcode.ready })}>
        <div className='App__center'>
          <BarcodeInput actions={actions} loading={barcode.loading} barcode={barcode.barcode} />
          { barcode.loading
            ? <LoadingLabel />
            : <ReadyLabel ready={barcode.ready} pdfLink={barcode.pdfLink} />
          }
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
