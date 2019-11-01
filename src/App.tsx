import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import allReducers from "./lib/reducers";
import MovieList from "./containers/MoviesList/MoviesList";
import movieSagas from './lib/sagas'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from "./components/header/header";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(movieSagas);


class App extends Component {
  render() {
    return (
        <div>
          <Provider store={store}>
            <Header/>
          <MovieList/>
          </Provider>
        </div>
    );
  }
}

export default App;
