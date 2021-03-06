/** Developed by: Ali Masani **/

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';

const loggerMiddleware = createLogger({ predecate: (getState, action) => __DEV__});

function configureStore (initialState){

  const enhancer = compose(

    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),

  );

  return createStore (reducer, initialState, enhancer);
}


const store = configureStore({});

const App = () => (

  <Provider store={store} >
    <AppContainer />
  </Provider>

);

export default App;