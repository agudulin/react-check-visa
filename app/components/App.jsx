import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BarcodeInput from './BarcodeInput.jsx';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BarcodeInput />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
