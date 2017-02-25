import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Home, Main, Login, Register, Mon_1 } from './containers';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
// import thunk from 'redux-thunk';

// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  /* <Provider store={store}>*/
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="login" component={Login}/>
          <Route path="/main" component={Main}/>
          <Route path="mon_1" component={Mon_1}/>
          <Route path="register" component={Register}/>
        </Route>
    </Router>
  /*</Provider>*/,
  document.getElementById('root')
);
