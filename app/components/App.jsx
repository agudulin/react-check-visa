import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import BarcodeInput from './BarcodeInput.jsx';

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
  static propTypes = {
    barcode: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch, barcode } = this.props;

    return (
      <div className={classNames('App', { 'App--success': barcode.ready })}>
        <div className='App__center'>
          <BarcodeInput dispatch={dispatch} loading={barcode.loading} />
          <LoadingLabel loading={barcode.loading} />
          <ReadyLabel ready={barcode.ready} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { barcode: state.barcode };
}

export default connect(mapStateToProps)(App);
