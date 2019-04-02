import React, { Component, Suspense, lazy } from 'react';
import { Route, Router, Link, Switch } from 'react-router-dom';
import { PACKAGE, ROUTE } from './Config';
import config from './config.json';
import history from './history';
import './App.css';
require('./ioc/test');

interface PropsType {

}
interface StateType {

}

class App extends Component<PropsType, StateType> {
  render() {
    return (
      <Suspense fallback={<div>文件资源加载中...</div>}>
        <Router history={history}>
          <div>
            <div>
              <div>导航</div>
              {
                config.packages.map((i: PACKAGE) => <Link key={i.path} to={i.path} style={{ marginRight: 16 }}>{i.name}</Link>)
              }
            </div>
            <Switch>
              {
                config.packages.map((i: PACKAGE) => <Route
                  key={i.path}
                  path={i.path}
                  component={lazy(() => import(`../packages${i.path}/build/bundle.js`))}
                />)
              }
              <Route render={() => <div>404</div>} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    )
  }
}

export default App;
