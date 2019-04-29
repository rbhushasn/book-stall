import React, { Component, Fragment } from 'react';

import 'scss/style.scss';

import List from 'components/List';
import Add from 'components/Add';
import Cart from 'components/Cart';

class App extends Component {
  render() {
    return (
      <div
        className={'container-fluid'}>
        <div
          className={'row border-bottom'}>

          <div
            className={'col-md-5 pt-3'}>

            <h3>Products</h3>

            <Add />

            <List />

          </div>

          <div
            className={'col-md-7 pt-3 border-left'}>

            <h3>{'Cart'}</h3>

            <Cart />

          </div>

        </div>
      </div>
    );
  }
}

export default App;