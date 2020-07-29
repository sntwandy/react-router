import React, { Component } from 'react';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Switch ,Route, Redirect } from 'react-router-dom';

// Components
import reducer from '../../reducers/index';
import Header from '../components/header';
import NotFound from '../components/not-found';
import Home from '../components/home';
import Videos from './videos';
import Contact from '../components/contact';

const logger_ = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/videos" component={Videos} />
              <Route exact path="/contacto" component={Contact} />
              <Redirect from="/v" to="/videos" />
              <Route component={NotFound} />
            </Switch>
        </React.Fragment>
      </Provider>
    );
  };
};

export default App;