import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/components/home';
import Videos from '../pages/containers/videos';
import Contact from '../pages/components/contact';
import NotFound from '../pages/components/not-found';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import Header from '../pages/components/header';
// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar está acción', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }


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


const homeContainer = document.getElementById('home-container')


render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/contacto" component={Contact} />
          <Route component={NotFound} />
          </Switch>
      </React.Fragment>
    </Provider>
  </BrowserRouter>
, homeContainer);

